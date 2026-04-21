import { createRoot } from 'react-dom/client';
import { AuthProvider } from './providers/auth-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import '../../global.css';

const container = document.getElementById('app');
const queryClient = new QueryClient()
if (container) {
        const root = createRoot(container);
        root.render(
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryClientProvider>
    )
}