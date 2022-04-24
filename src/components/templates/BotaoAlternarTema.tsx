import { IconeLua, IconeSol } from '../icons';

interface BotaoAlternarTemaProps {
    tema: string;
    alternarTema: () => void;
}

export default function BotaoAlternarTema({
    tema,
    alternarTema,
}: BotaoAlternarTemaProps) {
    return tema === 'dark' ? (
        <div
            onClick={alternarTema}
            className={`hidden sm:flex 
                        items-center
                        bg-gradient-to-r from-yellow-300 to-yellow-600 
                        lg:w-24 w-16 h-8 p-1 rounded-full 
                        cursor-pointer`}
        >
            <div
                className={`
                flex items-center justify-center
                bg-white text-yellow-600
                w-6 h-6 rounded-full
            `}
            >
                {IconeSol()}
            </div>
            <div className={`hidden lg:flex items-center ml-4 text-white`}>
                <span className={`text-sm`}>Claro</span>
            </div>
        </div>
    ) : (
        <div
            onClick={alternarTema}
            className={`hidden sm:flex 
        items-center justify-end 
        bg-gradient-to-r from-gray-500 to-gray-900 
        lg:w-24 w-16 h-8 p-1 rounded-full 
        cursor-pointer`}
        >
            <div className={`hidden lg:flex items-center mr-2 text-gray-300`}>
                <span className={`text-sm`}>Escuro</span>
            </div>
            <div
                className={`
                flex items-center justify-center
                bg-black text-yellow-300
                w-6 h-6 rounded-full
            `}
            >
                {IconeLua()}
            </div>
        </div>
    );
}
