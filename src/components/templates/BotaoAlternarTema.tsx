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
        <div onClick={alternarTema} className={`cursor-pointer`}>
            <div className={``}>
                <IconeSol />
            </div>
            <div className={``}>
                <span>Claro</span>
            </div>
        </div>
    ) : (
        <div onClick={alternarTema} className={`cursor-pointer`}>
            <div className={``}>
                <IconeLua />
            </div>
            <div className={``}>
                <span>Escuro</span>
            </div>
        </div>
    );
}
