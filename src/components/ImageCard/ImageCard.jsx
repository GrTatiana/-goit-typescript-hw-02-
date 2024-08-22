import css from "./ImageCard.module.css";

const ImageCard = ({ description, small, regular, openModal }) => {
  return (
    <div>
      <img
        className={css.image}
        src={small}
        alt={description}
        onClick={() => openModal(regular, description)}
      />
    </div>
  );
};

export default ImageCard;
