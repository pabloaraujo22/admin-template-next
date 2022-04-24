import { createContext, useCallback, useState } from 'react';

type Tema = 'dark' | '';
interface AppContextProps {
    tema?: Tema;
    alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppConsumer = AppContext.Consumer;

export function AppProvider({ children }) {
    const [tema, setTema] = useState<Tema>('');

    const alternarTema = useCallback(() => {
        setTema(tema === '' ? 'dark' : '');
    }, [tema]);
    return (
        <AppContext.Provider value={{ tema, alternarTema }}>
            {children}
        </AppContext.Provider>
    );
}
export default AppContext;
