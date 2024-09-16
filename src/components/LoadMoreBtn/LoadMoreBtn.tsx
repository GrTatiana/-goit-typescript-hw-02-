import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button type="button" className={css.button} onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
};
export default LoadMoreBtn;
