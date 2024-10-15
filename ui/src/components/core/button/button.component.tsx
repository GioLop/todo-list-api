import { FC } from "react";
import './button.component.scss'

enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary'
};

enum ButtonType {
    Button ='button',
    Sumbit = 'submit'
};

type ButtonProps = {
    value: string,
    variant?: ButtonVariant,
    type?: ButtonType,
    onClick?: () => void;
};

const Button:FC<ButtonProps> = ({ 
    value,
    variant = ButtonVariant.Primary,
    type = ButtonType.Button,
    onClick
}) => {
    return (
        <button
            className={`button button-${variant}`} 
            type={type === ButtonType.Sumbit ? 'submit' : 'button'}
            onClick={onClick}>
            {value}
        </button>
    );
};

export { ButtonVariant, ButtonType };
export default Button;
