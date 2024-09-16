import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={css.errorMessage}>
      <p>{error}</p>
    </div>
  );
};
export default ErrorMessage;
