import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [bookmarks, setBookmarks] = React.useState(() => {
    const fav = localStorage.getItem("bookmarks");
    return fav ? fav : [57243, 456, 30984, 44006];
  });

  return (
    <GlobalContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </GlobalContext.Provider>
  );
};
