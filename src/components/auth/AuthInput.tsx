interface AuthInputProps {
    label: string;
    valor: any;
    obrigatorio?: boolean;
    naoRenderizar?: boolean;
    tipo?: 'text' | 'email' | 'password';
    onChange: (novoValor: any) => void;
}

export default function AuthInput(props: AuthInputProps) {
    return props.naoRenderizar ? null : (
        <div className={`flex flex-col`}>
            <label>{props.label}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={(e) => props.onChange?.(e.target.value)}
                required={props.obrigatorio}
            />
        </div>
    );
}
