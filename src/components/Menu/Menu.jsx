import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import homeIcon from "/src/assets/icon-nav-home.svg";
import moviesIcon from "/src/assets/icon-nav-movies.svg";
import tvIcon from "/src/assets/icon-nav-tv-series.svg";
import bookmarkIcon from "/src/assets/icon-nav-bookmark.svg";
import profilePic from "/src/assets/image-avatar.png";
import logo from "/src/assets/logo.svg";

// Menu lateral com os links para as seções home, filmes e séries.
const Menu = () => {
  return (
    <div className={styles.menu}>
      <i>
        <img src={logo} alt="Logo da PlayPortal" />
      </i>
      <nav className={styles.nav}>
        <NavLink to={"/"} end>
          <i>
            <img src={homeIcon} alt="Logo da PlayPortal" />
          </i>
        </NavLink>
        <NavLink to={"/movies"}>
          <i>
            <img src={moviesIcon} alt="Navegar para seção de filmes" />
          </i>
        </NavLink>
        <NavLink to={"/tv"}>
          <i>
            <img src={tvIcon} alt="Navegar para seção séries" />
          </i>
        </NavLink>
        <NavLink to={"/bookmark"}>
          <i>
            <img src={bookmarkIcon} alt="Navegar para seção salvos" />
          </i>
        </NavLink>
      </nav>
      <div className={styles.profile}>
        <img src={profilePic} alt="Foto de perfil" />
      </div>
    </div>
  );
};

export default Menu;
