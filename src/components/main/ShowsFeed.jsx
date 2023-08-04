import React from "react";
import styles from "./ShowsFeed.module.css";
import Thumbnail from "../Helper/Thumbnail";
import useFetch from "../../hooks/useFetch";
import Loading from "../Helper/Loading";
import Error from "../../NotFound";
import { buscaPrincipaisFilmes } from "../../Api";

const ShowsFeed = ({ page }) => {
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    async function fetchMovies() {
      const { url } = buscaPrincipaisFilmes(page, 1000);
      request(url);
    }

    fetchMovies();
  }, [request, page]);

  console.log(loading);
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <div>
        <div className={styles.main}>
          {data.results.map((item, index) => {
            return <Thumbnail key={index} data={item} type={"movie"} />;
          })}
        </div>
      </div>
    );
  else return null;
};

export default ShowsFeed;
