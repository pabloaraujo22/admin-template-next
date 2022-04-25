import { AppProvider } from '../shared/contexts/AppContext';
import { AuthProvider } from '../shared/contexts/AuthContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </AuthProvider>
    );
}

export default MyApp;
