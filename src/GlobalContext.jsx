import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [bookmarks, setBookmarks] = React.useState(() => {
    const filmes = localStorage.getItem("filme");
    const tv = localStorage.getItem("serie");
    if (filmes || tv) {
      const filmesArray = filmes ? filmes.split(",") : [];
      const seriesArray = tv ? tv.split(",") : [];
      const fav = {};
      fav.filmes = filmesArray;
      fav.series = seriesArray;

      return fav;
    } else {
      return { filmes: [], series: [] };
    }
  });

  return (
    <GlobalContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </GlobalContext.Provider>
  );
};
