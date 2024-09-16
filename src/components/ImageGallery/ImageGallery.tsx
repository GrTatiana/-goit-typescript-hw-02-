import { Image } from "../../App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  openModal: (imageUrl: string, description: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, description, urls: { small, regular } }) => (
        <li key={id} className={css.listItem}>
          <ImageCard
            small={small}
            regular={regular}
            description={description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
