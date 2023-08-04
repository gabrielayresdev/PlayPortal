import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Home from "./components/Main/Home/Home";
import styles from "./App.module.css";
import Search from "./components/Search/Search";
import Movies from "./components/Main/Movies/Movies";
import TvSeries from "./components/Main/Tv/TvSeries";
import Bookmark from "./components/Main/Bookmark/Bookmark";
import NotFound from "./NotFound";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        {/* Menu e Search deve permanecer em todas as rotas */}
        <Menu />
        <Search />
        <div className={styles.appMain}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv" element={<TvSeries />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
