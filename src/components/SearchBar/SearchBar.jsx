import React from "react";
import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
const SearchBar = (onSubmit) => {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <FcSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
