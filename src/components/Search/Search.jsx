import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import searchIcon from "/src/assets/icon-search.svg";

// Barra de busca de shows.
const Search = () => {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    value ? navigate(`/search/${value}`) : navigate(``);
  }
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <label htmlFor="search" className={styles.icon}>
        <img src={searchIcon} alt="Pesquisar" />
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        placeholder="Search for movies or TV series"
      />
    </form>
  );
};

export default Search;
