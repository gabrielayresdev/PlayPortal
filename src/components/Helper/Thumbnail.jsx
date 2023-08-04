import Format from "../../Classes/Format";
import styles from "./Thumbnail.module.css";

const Thumbnail = ({ data, type }) => {
  return (
    <div className={styles.thumbnail}>
      <div className={styles.thumbnail_image}>
        <img
          src={`https://www.themoviedb.org/t/p/original${data.backdrop_path}`}
        />
        <span className={styles.redirect_button}>
          <img className={styles.arrow} src="./src/assets/icon-play.svg" />
          Detalhes
        </span>
      </div>
      <span className={styles.bookmark}>
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
        <p>{Format.getYear(data.release_date)}</p>
        {type === "movie" ? (
          <span>
            <img src="./src/assets/icon-nav-movies.svg" /> Movie
          </span>
        ) : (
          <span>
            <img src="./src/assets/icon-nav-tv-series.svg" /> Movie
          </span>
        )}
        <span>
          <img src="./src/assets/star-solid.svg" />
          {data.vote_average}
        </span>
      </div>

      <p className={styles.title}>{data.title}</p>
    </div>
  );
};

export default Thumbnail;
