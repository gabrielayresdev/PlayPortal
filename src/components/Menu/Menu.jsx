import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

// Menu lateral com os links para as seções home, filmes e séries.
const Menu = () => {
  return (
    <div className={styles.menu}>
      <i>
        <img src="/src/assets/logo.svg" alt="Logo da PlayPortal" />
      </i>
      <nav className={styles.nav}>
        <NavLink to={"/"} end>
          <i>
            <img src="/src/assets/icon-nav-home.svg" alt="Logo da PlayPortal" />
          </i>
        </NavLink>
        <NavLink to={"/movies"}>
          <i>
            <img
              src="/src/assets/icon-nav-movies.svg"
              alt="Navegar para seção de filmes"
            />
          </i>
        </NavLink>
        <NavLink to={"/tv"}>
          <i>
            <img
              src="/src/assets/icon-nav-tv-series.svg"
              alt="Navegar para seção séries"
            />
          </i>
        </NavLink>
        <NavLink to={"/bookmark"}>
          <i>
            <img
              src="/src/assets/icon-nav-bookmark.svg"
              alt="Navegar para seção salvos"
            />
          </i>
        </NavLink>
      </nav>
      <div className={styles.profile}>
        <img src="/src/assets/image-avatar.png" alt="Foto de perfil" />
      </div>
    </div>
  );
};

export default Menu;
