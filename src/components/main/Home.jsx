import React from "react";
import useFetch from "../../hooks/useFetch";
import Thumbnail from "./Thumbnail";
import styles from "./Home.module.css";
import Button from "../Button";

const Home = () => {
  const { error, loading, data, request } = useFetch();
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=03de48f66303824c443b36741744feac&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=1000&language=pt-BR&page=${page}`;

    request(url);
  }, [request, page]);

  React.useEffect(() => {
    if (data) setMovies((movies) => [...movies, ...data.results]);
  }, [data]);

  if (loading) return <div>Carregando</div>;
  if (error) return <div>{error}</div>;
  if (movies.length > 0)
    return (
      <>
        <div>
          <h1 className={styles.title}>Mais bem avaliados</h1>

          <div className={styles.main}>
            {movies.map((item) => {
              return <Thumbnail key={item.id} data={item} type={"movie"} />;
            })}
          </div>
        </div>
        <div className={styles.button_container}>
          <Button handleClick={() => setPage((page) => page + 1)}>
            Carregar mais
          </Button>
        </div>
      </>
    );
};

export default Home;
