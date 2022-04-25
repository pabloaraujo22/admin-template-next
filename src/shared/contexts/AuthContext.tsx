import { useRouter } from 'next/router';
import { createContext, useCallback, useState } from 'react';
import Usuario from '../../model/Usuario';
import firebase from '../services/config';

interface AuthContextProps {
    usuario?: Usuario;
    loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalisado(
    usuarioFirebase: firebase.User
): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken();
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL,
    };
}

export function AuthProvider({ children }: any) {
    const router = useRouter();
    const [usuario, setUsuario] = useState<Usuario>(null);

    const loginGoogle = useCallback(async () => {
        console.log('Login google...');
        router.push('/');
    }, [router]);

    return (
        <AuthContext.Provider value={{ usuario, loginGoogle }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
