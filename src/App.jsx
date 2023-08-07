import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./components/Main/Home/Home";
import styles from "./App.module.css";
import Search from "./components/Search/Search";
import Bookmark from "./components/Main/Bookmark/Bookmark";
import NotFound from "./NotFound";
import {
  buscaFilmesEmLancamento,
  buscaFilmesPopulares,
  buscaSeriesEmLancamento,
  buscaSeriesPopulares,
} from "./api";
import Catalogue from "./components/Main/Catalogue";
import SearchResults from "./components/Main/SearchResults";
import { GlobalStorage } from "./GlobalContext";

const content = {
  movies: {
    title: "Filmes mais populares",
    type: "filme",
    slideApi: buscaFilmesEmLancamento,
    catalogueApi: buscaFilmesPopulares,
  },
  tv: {
    title: "Séries mais populares",
    type: "serie",
    slideApi: buscaSeriesEmLancamento,
    catalogueApi: buscaSeriesPopulares,
  },
};

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        {/* Menu e Search deve permanecer em todas as rotas */}
        <Menu />
        <Search />
        <div className={styles.appMain}>
          <GlobalStorage>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/movies"
                element={
                  <Catalogue
                    content={content.movies}
                    catalogueApi={content.movies.catalogueApi}
                    slideApi={content.movies.slideApi}
                  />
                }
              />
              <Route
                path="/tv"
                element={
                  <Catalogue
                    content={content.tv}
                    catalogueApi={content.tv.catalogueApi}
                    slideApi={content.tv.slideApi}
                  />
                }
              />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/search/:nome" element={<SearchResults />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </GlobalStorage>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
