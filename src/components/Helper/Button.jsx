import styles from "./Button.module.css";

// Componente de botão padrão do site. O conteúdo do botão será o que estiver entre a tag. Ex. <Button>Hello World</Button>
// O botão também recebe um evento de click.
const Button = ({ children, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
