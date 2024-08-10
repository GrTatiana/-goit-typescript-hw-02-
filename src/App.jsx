import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";
import getImages from "./api";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
const notify = () => toast("Please enter a search query.");

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpenModal, setisOpenModal] = useState(false);

  const openModal = () => {
    setisOpenModal(true);
  };

  const closeModal = () => {
    setisOpenModal(false);
  };

  // useEffect(() => {
  //   if (!query) {
  //     return notify();
  //   }
  //   const fetchImages = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const { per_page, total_results, photos } = await getImages(
  //         query,
  //         page
  //       );
  //       if (!photos.length) {
  //         return setIsEmpty(true);
  //       }
  //       setImages((prevImages) => [...prevImages, ...photos]);
  //       setIsVisible(page < Math.ceil(total_results / per_page));
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchImages();
  // }, [query, page]);

  const handleSubmit = (value) => {
    if (searchQuery.trim() === "") {
      return notify();
    }
    searchQuery(value);
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
      {images.length > 0 && <ImageGallery images={images} />}
      {isVisible && <LoadMoreBtn onClick={onLoadMoreBtn} disabled={loading} />}
      {!photos.length && !isEmpty && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {loading && <Loader />}
      {error && (
        <Text textAlign="center">❌ Something went wrong - {error}</Text>
      )}
      {isEmpty && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
    </>
  );
}

export default App;
