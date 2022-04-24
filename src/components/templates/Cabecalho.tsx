import useAppContext from '../../shared/hooks/useAppContext';
import BotaoAlternarTema from './BotaoAlternarTema';
import Titulo from './Titulo';

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
}
export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternarTema } = useAppContext();
    return (
        <div className={`flex `}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-1 justify-end`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
            </div>
        </div>
    );
}
