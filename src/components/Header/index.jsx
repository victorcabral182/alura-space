import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import styles from "./Header.module.scss";

export const Header = () => {


  return (
    <>
      <header className={styles.cabecalho}>
        <img src={logo} alt="Logo do Alura Space" />
        <div className={styles.cabecalho__container}>
          <input
            type="text"
            placeholder="O que você procura?"
            className={styles.cabecalho__input}
          />
          <img src={searchIcon} alt="Ícone de lupa" />
        </div>
      </header>
    </>
  );
};
