import { ChangeEvent } from "react";

enum InputType {
    Text = 'text',
    Password = 'password'
};

enum InputVariant {
    Regular = 'regular',
    Big = 'big'
};

type InputProps = {
    value: string,
    placeholder: string,
    type?: InputType,
    variant?: InputVariant,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

const Input = ({ 
    value,
    placeholder,
    type = InputType.Text,
    variant = InputVariant.Regular,
    onChange
}:InputProps) => (
    <input
        value={value}
        placeholder={placeholder} 
        onChange={onChange}
        type={type}
        className={`input-${variant}`}/>
);

export { InputType, InputVariant };
export default Input;