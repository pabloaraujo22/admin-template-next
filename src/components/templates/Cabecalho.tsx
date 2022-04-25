import useAppContext from '../../shared/hooks/useAppContext';
import AvatarUsuario from './AvatarUsuario';
import BotaoAlternarTema from './BotaoAlternarTema';
import Titulo from './Titulo';

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
}
export default function Cabecalho(props: CabecalhoProps) {
    const { tema, alternarTema } = useAppContext();
    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-1 items-center justify-end`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    );
}
