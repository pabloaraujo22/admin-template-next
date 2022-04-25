import { createContext } from 'react';
import firebase from '../services/config';

interface AuthContextProps {}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider({ children }: any) {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
