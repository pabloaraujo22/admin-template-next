import { createContext, useCallback, useEffect, useState } from 'react';

interface AppContextProps {
    tema?: string;
    alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppConsumer = AppContext.Consumer;

export function AppProvider({ children }) {
    const [tema, setTema] = useState<string>('dark');

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema');
        setTema(temaSalvo);
    }, []);

    const alternarTema = useCallback(() => {
        const novoTema = tema === '' ? 'dark' : '';
        setTema(novoTema);
        localStorage.setItem('tema', novoTema);
    }, [tema]);
    return (
        <AppContext.Provider value={{ tema, alternarTema }}>
            {children}
        </AppContext.Provider>
    );
}
export default AppContext;
