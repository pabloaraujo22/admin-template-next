/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Router from 'next/router';
import loading from '../../../public/images/loading.gif';
import useAuthContext from '../../shared/hooks/useAuthContext';

export default function ForcarAutenticacao(props: any) {
    const { usuario, carregando } = useAuthContext();

    function renderizarConteudo() {
        return <>{props.children}</>;
    }

    function renderizarCarregando() {
        return (
            <div className={`flex justify-center items-center h-screen`}>
                <Image src={loading} />
            </div>
        );
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo();
    } else if (carregando) {
        return renderizarCarregando();
    } else {
        Router.push('/autenticacao');
        return null;
    }
}
