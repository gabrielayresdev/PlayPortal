import styles from "./Thumbnail_loading.module.css";

const Thumbnail_loading = () => {
  return (
    <div className={styles.loading_thumbnail}>
      <span className={styles.loading_image}></span>

      <span className={styles.loading_info}></span>

      <span className={styles.loading_title}></span>
    </div>
  );
};

export default Thumbnail_loading;
