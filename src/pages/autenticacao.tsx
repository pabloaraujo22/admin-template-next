import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

interface AutenticacaoProps {}

export default function Autenticacao(props: AutenticacaoProps) {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    function onSubmit() {
        if (modo === 'login') {
            console.log('login');
        } else {
            console.log('Cadastrar');
        }
    }

    return (
        <div className={`flex flex-col h-screen items-center justify-center`}>
            <div className={`w-1/2`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {modo === 'login'
                        ? 'Entre com sua Conta'
                        : 'Cadastre-se na Plataforma'}
                </h1>
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
            </div>
        </div>
    );
}
