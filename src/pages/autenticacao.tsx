import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

interface AutenticacaoProps {}

export default function Autenticacao(props: AutenticacaoProps) {
    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    return (
        <div>
            <h1>Autenticação</h1>
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
        </div>
    );
}
