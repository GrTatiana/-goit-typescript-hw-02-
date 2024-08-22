import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    padding: "0",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -45%)",
  },
  overlay: {
    backgroundColor: "rgba(19, 19, 19, 0.6)",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, escCloseModal, imgUrl, imgAlt }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={closeModal || escCloseModal}
      style={customStyles}
    >
      <img className={css.modalImage} src={imgUrl} alt={imgAlt} />
    </Modal>
  );
};

export default ImageModal;
