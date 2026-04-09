import { createRoot } from 'react-dom/client';
import { AuthProvider } from './providers/auth-provider.js';
import App from './App.js';
import '../../global.css';

const container = document.getElementById('app');
if (container) {
        const root = createRoot(container);
        root.render(
        <AuthProvider>
            <App />
        </AuthProvider>
    )
}