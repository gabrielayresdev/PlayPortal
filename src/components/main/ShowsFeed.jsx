import React from "react";
import styles from "./ShowsFeed.module.css";
import Thumbnail from "./Thumbnail";
import useFetch from "../../hooks/useFetch";
import Loading from "./Loading";
import Error from "../Error";

const ShowsFeed = ({ page }) => {
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=03de48f66303824c443b36741744feac&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=1000&language=pt-BR&page=${page}`;

    request(url);
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
