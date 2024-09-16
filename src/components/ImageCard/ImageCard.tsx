import css from "./ImageCard.module.css";

type ImageCardProps = {
  description: string;
  small: string;
  regular: string;
  openModal: (imageUrl: string, description: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({
  description,
  small,
  regular,
  openModal,
}) => {
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
