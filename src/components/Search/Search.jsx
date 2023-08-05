import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";

// Barra de busca de shows.
const Search = () => {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    navigate(`/search/${value}`);
  }
  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <label htmlFor="search" className={styles.icon}>
        <img src="/src/assets/icon-search.svg" alt="Pesquisar" />
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
