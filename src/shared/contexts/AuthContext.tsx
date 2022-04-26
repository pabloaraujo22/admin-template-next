import { useRouter } from 'next/router';
import { createContext, useCallback, useEffect, useState } from 'react';
import Usuario from '../../model/Usuario';
import firebase from '../services/config';
import Cookies from 'js-cookie';
interface AuthContextProps {
    usuario?: Usuario;
    carregando?: boolean;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
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
    const [carregando, setCarregando] = useState<boolean>(true);
    const [usuario, setUsuario] = useState<Usuario>(null);

    const gerenciarCookie = useCallback(
        (logado: boolean) => {
            if (logado) {
                Cookies.set('admin-template-auth', usuario?.token, {
                    expires: 1,
                });
            } else {
                Cookies.remove('admin-template-auth');
            }
        },
        [usuario?.token]
    );
    const configurarSessao = useCallback(
        async (usuarioFirebase: firebase.User) => {
            if (usuarioFirebase?.email) {
                const usuario = await usuarioNormalisado(usuarioFirebase);
                setUsuario(usuario);
                gerenciarCookie(true);
                setCarregando(false);
                return usuario.email;
            } else {
                setUsuario(null);
                gerenciarCookie(false);
                setCarregando(false);
                return false;
            }
        },
        [gerenciarCookie]
    );

    const loginGoogle = useCallback(async () => {
        try {
            setCarregando(true);
            const resposta = await firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider());

            configurarSessao(resposta.user);
            router.push('/');
        } catch (e) {
        } finally {
            setCarregando(false);
        }
    }, [configurarSessao, router]);

    const logout = useCallback(async () => {
        try {
            setCarregando(true);
            await firebase.auth().signOut();
            await configurarSessao(null);
        } catch (e) {
        } finally {
            setCarregando(false);
        }
    }, [configurarSessao]);

    useEffect(() => {
        if (Cookies.get('admin-template-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
            return () => cancelar();
        } else {
            setCarregando(false);
        }
    }, [configurarSessao]);
    return (
        <AuthContext.Provider
            value={{ usuario, carregando, loginGoogle, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
