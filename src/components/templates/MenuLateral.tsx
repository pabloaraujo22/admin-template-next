import useAuthContext from '../../shared/hooks/useAuthContext';
import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from '../icons';
import Logo from './Logo';
import MenuItem from './MenuItem';

interface MenuLateralProps {}
export default function MenuLateral(props: MenuLateralProps) {
    const { logout } = useAuthContext();
    return (
        <aside
            className={`flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200`}
        >
            <div
                className={`flex flex-col items-center justify-center h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800`}
            >
                <Logo />
            </div>
            <ul className={`flex-1`}>
                <MenuItem url="/" texto="Inicio" icone={<IconeCasa />} />
                <MenuItem
                    url="/ajustes"
                    texto="Ajustes"
                    icone={<IconeAjustes />}
                />
                <MenuItem
                    url="/notificacoes"
                    texto="Notificações"
                    icone={<IconeSino />}
                />
            </ul>
            <ul>
                <MenuItem
                    onClick={logout}
                    texto="Sair"
                    className={`text-red-600  hover:bg-red-400  hover:text-white dark:text-red-400 dark:hover:text-white`}
                    icone={<IconeSair />}
                />
            </ul>
        </aside>
    );
}
