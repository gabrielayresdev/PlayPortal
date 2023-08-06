import styles from "./SliderHome.module.css";

const SliderHome = ({ data }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.slide_image}
        src={`https://www.themoviedb.org/t/p/original/${data.backdrop_path}`}
      />

      <p className={styles.title}>{data.title ? data.title : data.name}</p>

      <span className={styles.boxShadow}></span>
    </div>
  );
};

export default SliderHome;
