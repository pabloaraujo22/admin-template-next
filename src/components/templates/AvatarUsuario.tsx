/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import useAuthContext from '../../shared/hooks/useAuthContext';

interface AvatarUsuarioProps {
    className?: string;
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuthContext();

    return (
        <Link href={'/perfil'} passHref>
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                className={`w-10 h-10 rounded-full cursor-pointer ${props.className}`}
            />
        </Link>
    );
}
