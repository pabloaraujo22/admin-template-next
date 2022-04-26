/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import loading from '../../../public/images/loading.gif';
import useAuthContext from '../hooks/useAuthContext';

export default function forcarAutenticacao(jsx: any) {
    const { usuario, carregando } = useAuthContext();
    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `if(!document.cookie?.includes("admin-template-auth")){window.location.href = "/autenticacao"}`,
                        }}
                    ></script>
                </Head>
                {jsx}
            </>
        );
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
