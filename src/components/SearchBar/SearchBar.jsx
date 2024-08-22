import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();

    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search images and photos"
          autoFocus
        />
        <button className={css.button} type="submit">
          <FcSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;
