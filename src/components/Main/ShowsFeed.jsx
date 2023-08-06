import React from "react";
import styles from "./ShowsFeed.module.css";
import Thumbnail from "../Helper/Thumbnail";
import useFetch from "../../hooks/useFetch";
import Loading from "../Helper/Loading";
import Error from "../../NotFound";

// Exibe uma página de filmes ou séries. Recebe como parâmetros a página, a função que retorna o url para a requisição e o tipo de show (filme ou série).
const ShowsFeed = ({ page, api, type, params }) => {
  const { error, loading, data, request } = useFetch();

  // Ao entrar na página, um request será feito e atualizara os dados dos filmes.
  React.useEffect(() => {
    async function fetchMovies() {
      const { url } = api(...params);
      // Ao chamar o request, data é atualizado com o resultado da requisição.
      request(url);
    }

    fetchMovies();
  }, [request, page, api, params]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <div>
        <div className={styles.main}>
          {data.results.map((item, index) => {
            return <Thumbnail key={index} data={item} type={type} />;
          })}
        </div>
      </div>
    );
  else return null;
};

export default ShowsFeed;
