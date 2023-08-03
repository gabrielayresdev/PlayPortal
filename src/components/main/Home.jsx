import React from "react";
import styles from "./Home.module.css";
import Button from "../Button";
import ShowsFeed from "./ShowsFeed";

const Home = () => {
  const [pages, setPages] = React.useState([1]);

  return (
    <>
      <div>
        <h1 className={styles.title}>Mais bem avaliados</h1>

        <div>
          {pages.map((page) => {
            return <ShowsFeed key={page} page={page} />;
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
