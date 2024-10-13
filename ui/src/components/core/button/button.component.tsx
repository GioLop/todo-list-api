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

const Button = ({ 
    value,
    variant = ButtonVariant.Black,
    type = ButtonType.Button,
    onClick
}:ButtonProps) => {
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
