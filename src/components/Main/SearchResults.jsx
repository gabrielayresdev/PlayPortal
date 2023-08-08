import React from "react";
import { buscaShowPorNome } from "../../api";
import ShowsFeed from "./ShowsFeed";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const [pages, setPages] = React.useState([1]);
  const params = useParams();

  return (
    <div>
      {pages.map((page) => {
        return (
          <ShowsFeed
            key={page}
            page={page}
            api={buscaShowPorNome}
            type="filme"
            params={[page, params.nome]}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
