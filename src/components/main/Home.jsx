import React from "react";
import useFetch from "../../hooks/useFetch";
import Thumbnail from "./Thumbnail";
import styles from "./Home.module.css";

const Home = () => {
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?api_key=03de48f66303824c443b36741744feac&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=1000&language=pt-BR";

    request(url);
  }, [request]);

  if (loading) return <div>Carregando</div>;
  if (error) return <div>{error}</div>;
  if (data)
    return (
      <div>
        <h1 className={styles.title}>Mais bem avaliados</h1>

        <div className={styles.main}>
          {data.results.map((item) => {
            return <Thumbnail key={item.id} data={item} type={"movie"} />;
          })}
        </div>
      </div>
    );
};

export default Home;
