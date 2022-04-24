import { createContext, useState } from 'react';

interface AppContextProps {
    children?: any;
    nome?: string;
}

const AppContext = createContext({} as AppContextProps);

export const AppConsumer = AppContext.Consumer;

export function AppProvider({ children }: AppContextProps) {
    const [nome, setNome] = useState<string>('Teste Api Context!!');
    return (
        <AppContext.Provider value={{ nome }}>{children}</AppContext.Provider>
    );
}
export default AppContext;
