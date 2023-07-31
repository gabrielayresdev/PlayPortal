import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.search}>
      <label htmlFor="search" className={styles.icon}>
        <img src="./src/assets/icon-search.svg" alt="Pesquisar" />
      </label>
      <input
        id="search"
        type="text"
        className={styles.input}
        placeholder="Search for movies or TV series"
      />
    </form>
  );
};

export default Search;
