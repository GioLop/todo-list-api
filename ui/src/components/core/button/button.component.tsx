import { FC } from "react";

enum ButtonVariant {
    Black = 'black',
    White = 'white'
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
    variant = ButtonVariant.Black,
    type = ButtonType.Button,
    onClick
}) => {
    return (
        <button 
            type={type === ButtonType.Sumbit ? 'submit' : 'button'}
            className={`button-${variant}`}
            onClick={onClick}>
            {value}
        </button>
    );
};

export { ButtonVariant, ButtonType };
export default Button;
