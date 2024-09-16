import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import getPhotos from "./api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { string } from "yup";
import { Image } from "./App.types";

interface Modal {
  imgUrl: string;
  imgAlt: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Modal | null>(null);

  const openModal = (imgUrl: string, imgAlt: string) => {
    setModalData({ imgUrl, imgAlt });
  };

  const closeModal = (): void => {
    setModalData(null);
  };

  const escCloseModal = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      setModalData(null);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (!query || query.trim() === "") {
        toast.error("Enter search term");
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const data = await getPhotos(query, page);
        const getPhotosData = data.results;
        if (!getPhotosData || getPhotosData.length === 0) {
          setIsEmpty(true);
          console.log("No images found");
          const notify = () =>
            toast.error(
              "Sorry, there are no images matching your search query. Please try again.",
              {
                position: "top-center",
                duration: 3000,
                style: { marginTop: 110 },
              }
            );
          notify();
        }
        setImages((prevPhotos) => [...prevPhotos, ...getPhotosData]);
        setIsVisible(page < data.total_pages);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsVisible(false);
    setIsEmpty(false);
    setError(null);
  };

  const onLoadMoreBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loading && <Loader />}
      {isVisible && <LoadMoreBtn onClick={onLoadMoreBtn} disabled={loading} />}
      {error && <ErrorMessage error={error} />}
      {isEmpty && <Toaster />}
      {modalData && (
        <ImageModal
          isOpen={!!modalData}
          imgUrl={modalData?.imgUrl}
          imgAlt={modalData?.imgAlt}
          closeModal={closeModal}
          escCloseModal={escCloseModal}
        />
      )}
    </>
  );
};

export default App;
