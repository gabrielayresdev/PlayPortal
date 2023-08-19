import styles from "./SlideItem.module.css";
import Format from "../../classes/Format";
import { GlobalContext } from "../../GlobalContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import filmeIcon from "/src/assets/icon-nav-movies.svg";

const SlideItem = ({ data, type }) => {
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
    <div className={styles.item}>
      <img
        onClick={openMoviePage}
        className={styles.slide_image}
        src={`https://www.themoviedb.org/t/p/w342/${data.backdrop_path}`}
      />
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
      <div className={styles.text_container}>
        <div className={styles.info}>
          <p>
            {Format.getYear(
              data.release_date ? data.release_date : data.first_air_date
            )}
          </p>
          {type === "filme" ? (
            <span>
              <img src={filmeIcon} /> Filme
            </span>
          ) : (
            <span>
              <img src="src/assets/icon-nav-tv-series.svg" /> Série
            </span>
          )}
          <span>
            <img src="src/assets/star-solid.svg" />
            {data.vote_average}
          </span>
        </div>
        <p className={styles.title}>{data.title ? data.title : data.name}</p>
      </div>
    </div>
  );
};

export default SlideItem;
