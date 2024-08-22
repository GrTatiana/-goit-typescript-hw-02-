import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ error }) => {
  return (
    <div className={css.errorMessage}>
      {" "}
      <p>{error}</p>
    </div>
  );
};
export default ErrorMessage;
