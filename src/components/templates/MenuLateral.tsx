import { IconeAjustes, IconeCasa, IconeSino } from '../icons';
import MenuItem from './MenuItem';

interface MenuLateralProps {}
export default function MenuLateral(props: MenuLateralProps) {
    return (
        <aside>
            <ul>
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
        </aside>
    );
}
