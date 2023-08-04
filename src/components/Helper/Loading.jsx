import styles from "./Loading.module.css";
import Thumbnail_loading from "./Thumbnail_loading";

// Realiza o Loading de 20 elementos
const Loading = () => {
  const numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className={styles.main}>
      {numeros.map((index) => {
        console.log(index);
        return <Thumbnail_loading key={index} />;
      })}
    </div>
  );
};

export default Loading;
