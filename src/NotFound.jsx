import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <h1 className={styles.error_title}>
        4<span>0</span>4
      </h1>
      <p>
        Oops! Não foi possível encontrar a página que procurava. Que tal voltar
        para a página inicial?
      </p>
      <Link to="/" className={styles.error_button}>
        Voltar para home <img src="./src/assets/house-solid.svg" />
      </Link>
    </div>
  );
};

export default NotFound;
