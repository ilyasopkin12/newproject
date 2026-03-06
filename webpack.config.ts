import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env: any, argv: { mode: string }) => {
  const isProduction = argv.mode === 'production';
  
  const config: Configuration & DevServerConfiguration = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/app/main.tsx',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              // В production строго проверяем типы
              transpileOnly: !isProduction,
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.module\.scss$/,
          use: [
            // В production извлекаем CSS в отдельные файлы
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { 
              loader: 'css-loader', 
              options: { 
                modules: true, 
                esModule: false,
                // Source maps только для dev
                sourceMap: !isProduction,
              } 
            },
            'sass-loader',
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { sourceMap: !isProduction } },
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { sourceMap: !isProduction } },
          ],
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /react/,
              use: ['@svgr/webpack'],
            },
            {
              type: 'asset/resource',
              generator: { filename: 'assets/images/[hash][ext][query]' },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      extensionAlias: {
        '.js': ['.tsx', '.ts', '.js'],
      },
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@app': path.resolve(__dirname, 'src/app'),
      },
    },
    // Source maps: подробные для dev, легкие для prod
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    
    // DevServer только для development
    ...(isProduction ? {} : {
      devServer: {
        static: './dist',
        port: 3000,
        hot: true,
        historyApiFallback: true, // для SPA роутинга
      },
    }),
    
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/app/index.html',
        // В production минифицируем HTML
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        } : false,
      }),
      new MiniCssExtractPlugin({
        filename: isProduction 
          ? 'styles/[name].[contenthash].css'
          : 'styles/[name].css',
        chunkFilename: isProduction
          ? 'styles/[id].[contenthash].css'
          : 'styles/[id].css',
      }),
    ],
    
    // Production оптимизации
    optimization: {
      minimize: isProduction,
      splitChunks: isProduction ? {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
          },
          common: {
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      } : false,
    },
    
    // Production метрики
    performance: isProduction ? {
      hints: 'warning',
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    } : false,
  };
  
  return config;
};