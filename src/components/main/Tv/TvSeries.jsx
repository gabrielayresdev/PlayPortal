import React from "react";
import styles from "./TvSeries.module.css";
import Button from "../../Helper/Button";
import ShowsFeed from "../ShowsFeed";
import { buscaSeriesPopulares } from "../../../Api";

const Movies = () => {
  const [pages, setPages] = React.useState([1]);

  return (
    <>
      <div>
        <h1 className={styles.title}>Séries mais populares</h1>

        <div>
          {pages.map((page) => {
            return (
              <ShowsFeed
                key={page}
                page={page}
                api={buscaSeriesPopulares}
                type="Série"
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
