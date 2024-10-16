import { ChangeEvent, FC } from "react";
import './input.component.scss'

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

const Input:FC<InputProps> = ({ 
    value,
    placeholder,
    type = InputType.Text,
    variant = InputVariant.Regular,
    onChange
}) => (
    <input
        value={value}
        placeholder={placeholder} 
        onChange={onChange}
        type={type}
        className={`input input-${variant}`}/>
);

export { InputType, InputVariant };
export default Input;