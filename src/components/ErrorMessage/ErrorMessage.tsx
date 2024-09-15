import css from "./ErrorMessage.module.css";

type Props = {
  error: string;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    <div className={css.errorMessage}>
      {" "}
      <p>{error}</p>
    </div>
  );
};
export default ErrorMessage;
