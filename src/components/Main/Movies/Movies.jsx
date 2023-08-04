import React from "react";
import styles from "./Movies.module.css";
import Button from "../../Helper/Button";
import ShowsFeed from "../ShowsFeed";
import { buscaFilmesPopulares } from "/src/api.jsx";

const Movies = () => {
  const [pages, setPages] = React.useState([1]);

  return (
    <>
      <div>
        <h1 className={styles.title}>Filmes mais populares</h1>

        <div>
          {pages.map((page) => {
            return (
              <ShowsFeed
                key={page}
                page={page}
                api={buscaFilmesPopulares}
                type="Filme"
              />
            );
          })}
        </div>
      </div>
      <div className={styles.button_container}>
        <Button
          handleClick={() => setPages((page) => [...page, page.length + 1])}
        >
          Carregar mais
        </Button>
      </div>
    </>
  );
};

export default Movies;
