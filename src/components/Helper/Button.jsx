import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
