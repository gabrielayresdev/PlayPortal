import React from "react";
import { GlobalContext } from "../../../GlobalContext";
import Thumbnail from "../../Helper/Thumbnail";
import styles from "./Bookmark.module.css";

const Bookmark = () => {
  const global = React.useContext(GlobalContext);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    async function requestAll(global) {
      let responses = [];
      for (let i = 0; i < global.bookmarks.series.length; i++) {
        const tv = fetch(
          `https://api.themoviedb.org/3/tv/${global.bookmarks.series[i]}?api_key=03de48f66303824c443b36741744feac&lang=pt-BR`
        ).then((r) => r.json());

        responses.push(tv);
      }

      for (let i = 0; i < global.bookmarks.filmes.length; i++) {
        const movies = fetch(
          `https://api.themoviedb.org/3/movie/${global.bookmarks.filmes[i]}?api_key=03de48f66303824c443b36741744feac&lang=pt-BR`
        ).then((r) => r.json());

        responses.push(movies);
      }

      const results = await Promise.all(responses);
      setData(results);
    }

    requestAll(global);
  }, [global]);

  if (data) {
    return (
      <div className={styles.main}>
        {data.map((item) => {
          return (
            <Thumbnail
              key={item.id}
              data={item}
              type={item.last_episode_to_air ? "serie" : "filme"}
            />
          );
        })}
      </div>
    );
  } else return null;
};

export default Bookmark;
