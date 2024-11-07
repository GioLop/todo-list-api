import './error-message.component.scss'

const ErrorMessage = ({ message }: { message:string }) => <div className="error-message">{ message }</div>;

export default ErrorMessage;