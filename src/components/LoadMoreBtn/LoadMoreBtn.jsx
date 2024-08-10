import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = () => {
  return (
    <div>
      <button type="button" className={css.button}>
        {" "}
        LOAD MORE
      </button>
    </div>
  );
};
export default LoadMoreBtn;
