/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconeAtencao } from '../components/icons';

interface AutenticacaoProps {}

export default function Autenticacao(props: AutenticacaoProps) {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [erro, setErro] = useState(null);

    function exibirErro(msg: string, tempoEmSegundos: number = 5) {
        setErro(msg);
        setTimeout(() => {
            setErro(null);
        }, tempoEmSegundos * 1000);
    }

    function onSubmit() {
        if (modo === 'login') {
            exibirErro('Ocorreu um erro no Login!');
            console.log('login');
        } else {
            exibirErro('Ocorreu um erro no Cadastro!');
            console.log('Cadastrar');
        }
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de Autenticação"
                    className={`h-screen w-full object-cover`}
                />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-2/3`}>
                <h1 className={`text-3xl font-bold mb-5`}>
                    {modo === 'login'
                        ? 'Entre com sua Conta'
                        : 'Cadastre-se na Plataforma'}
                </h1>
                {erro ? (
                    <div
                        className={` 
                    flex items-center
                    bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg
                `}
                    >
                        {IconeAtencao()}
                        <span className={`mx-3`}>{erro}</span>
                    </div>
                ) : (
                    false
                )}
                <AuthInput
                    tipo="text"
                    label="Email"
                    valor={email}
                    onChange={setEmail}
                    obrigatorio
                />
                <AuthInput
                    tipo="password"
                    label="Senha"
                    valor={senha}
                    onChange={setSenha}
                    obrigatorio
                />
                <button
                    onClick={onSubmit}
                    className={`
                w-full 
                bg-indigo-500 hover:bg-indigo-400 
                text-white rounded-lg 
                px-4 py-3 mt-6
                `}
                >
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className={`my-6 border-gray-300 w-full`} />
                <button
                    onClick={onSubmit}
                    className={`
                w-full 
                bg-red-500 hover:bg-red-400 
                text-white rounded-lg 
                px-4 py-3
                `}
                >
                    Entrar com o Google
                </button>

                {modo === 'login' ? (
                    <p
                        className={`
                        text-blue-500 hover:text-blue-700 font-semibold 
                        cursor-pointer
                        mt-8
                        `}
                    >
                        <a onClick={() => setModo('cadastro')}>
                            Criar uma conta?
                        </a>
                    </p>
                ) : (
                    <p
                        className={`
                    text-blue-500 hover:text-blue-700 font-semibold 
                    cursor-pointer
                    mt-8
                    `}
                    >
                        <a onClick={() => setModo('login')}>Já tem conta?</a>
                    </p>
                )}
            </div>
        </div>
    );
}
