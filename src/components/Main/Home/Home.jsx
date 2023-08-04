import React from "react";
import styles from "./Home.module.css";
import Button from "../../Helper/Button";
import ShowsFeed from "../ShowsFeed";
import { buscaPrincipaisFilmes } from "../../../Api";

// Homepage do site
const Home = () => {
  const [pages, setPages] = React.useState([1]);

  return (
    <>
      <div>
        <h1 className={styles.title}>Mais bem avaliados</h1>

        {/* Utilizar Componentes com os filmes permite que ao apertar o botão carregar mais, os filmes já carregados não sejam recarregados. */}
        <div>
          {pages.map((page) => {
            return (
              <ShowsFeed
                key={page}
                page={page}
                api={buscaPrincipaisFilmes}
                type="Filme"
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

export default Home;
