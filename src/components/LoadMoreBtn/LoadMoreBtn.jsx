import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div>
      <button type="button" className={css.button} onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
};
export default LoadMoreBtn;
