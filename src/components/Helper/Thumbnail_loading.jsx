import styles from "./Thumbnail_loading.module.css";

// Skeleton de Loading das thumbnails dos filmes e séries.
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
