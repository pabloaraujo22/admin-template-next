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
        <div className={`flex flex-col mt-4`}>
            <label>{props.label}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={(e) => props.onChange?.(e.target.value)}
                required={props.obrigatorio}
                className={`
                    px-4 py-4 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
            />
        </div>
    );
}
