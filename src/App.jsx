import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/main/Home";
import styles from "./App.module.css";
import Search from "./components/Search";
import Movies from "./components/main/Movies";
import TvSeries from "./components/main/TvSeries";
import Bookmark from "./components/main/Bookmark";
import Error from "./components/Error";

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
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
