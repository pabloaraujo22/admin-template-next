import Layout from '../components/templates/Layout';
import useAppContext from '../shared/hooks/useAppContext';

export default function Home() {
    const { alternarTema } = useAppContext();

    return (
        <Layout
            titulo="Página Inicial"
            subtitulo="Estamos construindo um template admin"
        >
            <h3>Conteúdo</h3>
            <button onClick={alternarTema}>Alternar Tema</button>
        </Layout>
    );
}
