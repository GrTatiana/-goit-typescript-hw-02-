import css from "./LoadMoreBtn.module.css";

type BtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<BtnProps> = ({ onClick }) => {
  return (
    <div>
      <button type="button" className={css.button} onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
};
export default LoadMoreBtn;
