import React from "react";
import { GlobalContext } from "../../GlobalContext";
import Format from "../../classes/Format";
import styles from "./Thumbnail.module.css";
import { useNavigate } from "react-router-dom";
import movieIcon from "/src/assets/icon-nav-movies.svg";
import tvIcon from "/src/assets/icon-nav-tv-series.svg";
import starIcon from "/src/assets/star-solid.svg";
import playIcon from "/src/assets/icon-play.svg";

// Thumbnail dos filmes e séries. Deve receber como parâmetro um objeto com os dados do show e o tipo(filme ou séries)
const Thumbnail = ({ data, type }) => {
  const global = React.useContext(GlobalContext);
  const navigator = useNavigate();
  const [fav, setFav] = React.useState(() => {
    return global.bookmarks[`${type}s`].includes("" + data.id);
  });

  function handleBookmark() {
    if (fav) {
      setFav(false);
      const aux = global.bookmarks[`${type}s`];
      const index = aux.indexOf(data.id + "");
      aux.splice(index, 1);
      localStorage.setItem(type, aux);
    } else {
      setFav(true);
      global.bookmarks[`${type}s`].push("" + data.id);

      localStorage.setItem(type, global.bookmarks[`${type}s`]);
    }
  }

  function openMoviePage() {
    const ty = type === "filme" ? "movie" : "serie";
    navigator(`/${ty}/${data.id}`);
  }

  return (
    <div className={styles.thumbnail}>
      <div className={styles.thumbnail_image}>
        <img
          onClick={openMoviePage}
          src={`https://www.themoviedb.org/t/p/w342/${
            data.backdrop_path ? data.backdrop_path : data.poster_path
          }`}
        />
        <span className={styles.redirect_button} onClick={openMoviePage}>
          <img className={styles.arrow} src={playIcon} />
          Detalhes
        </span>
      </div>
      <span
        className={`${styles.bookmark} ${fav ? styles.active : ""}`}
        onClick={handleBookmark}
      >
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </span>
      <div className={styles.info}>
        <p>
          {Format.getYear(
            data.release_date ? data.release_date : data.first_air_date
          )}
        </p>
        {type === "filme" ? (
          <span>
            <img src={movieIcon} /> Filme
          </span>
        ) : (
          <span>
            <img src={tvIcon} /> Série
          </span>
        )}
        <span>
          <img src={starIcon} />
          {data.vote_average}
        </span>
      </div>

      <p className={styles.title}>{data.title ? data.title : data.name}</p>
    </div>
  );
};

export default Thumbnail;
