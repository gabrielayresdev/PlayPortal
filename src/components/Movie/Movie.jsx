import React from "react";
import useFetch from "../../hooks/useFetch";
import { buscaFilme } from "../../api";
import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import Pie from "../Helper/Circle";
import Format from "../../classes/Format";
const Movie = () => {
  const { error, data, loading, request } = useFetch();

  const params = useParams();
  React.useEffect(() => {
    async function fetchData() {
      const { url } = buscaFilme(params.id);
      request(url);
    }

    fetchData();
  }, [params, request]);

  if (data)
    return (
      <div className={styles.movie}>
        <div className={styles.poster}>
          <img
            src={`https://www.themoviedb.org/t/p/original${data.poster_path}`}
            alt=""
          />
        </div>
        <div className={styles.info}>
          <div>
            <h2 className={styles.title}>{data.title}</h2>
            <div className={styles.data}>
              <span>{Format.formatDate(data.release_date)}</span>
              <span>{Format.formatRuntime(data.runtime)}</span>
            </div>
          </div>

          <div className={styles.vote}>
            <Pie
              percentage={data.vote_average * 10}
              colour={data.vote_average > 7 ? "#21d07a" : "#d2d531"}
            ></Pie>
            <p>Avaliação do usuário</p>
          </div>
          <p className={styles.overview}>{data.overview}</p>
          <div className={styles.genres}>
            {data.genres.map((genre, index) => {
              return (
                <span className={styles.genre} key={index}>
                  {genre.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default Movie;
