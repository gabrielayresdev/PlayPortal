import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import styles from "./App.module.css";
import Search from "./components/Search";
import Movies from "./components/Movies";
import TvSeries from "./components/TvSeries";
import Bookmark from "./components/Bookmark";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Menu />
        <Search />
        <div className={styles.appMain}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv" element={<TvSeries />} />
            <Route path="bookmark" element={<Bookmark />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
