import React from "react";
import home from "../../assets/icones/home-ativo.png";
import mostLiked from "../../assets/icones/mais-curtidas-inativo.png";
import mostViewed from "../../assets/icones/mais-vistas-inativo.png";
import news from "../../assets/icones/novas-inativo.png";
import surpriseMe from "../../assets/icones/surpreenda-me-inativo.png";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="Home" />
          <a href="/">Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostLiked} alt="Most Liked" />
          <a href="/">Most liked</a>
        </li>
        <li className={styles.menu__item}>
          <img src={mostViewed} alt="Most Viewed" />
          <a href="/">Most viewed</a>
        </li>
        <li className={styles.menu__item}>
          <img src={news} alt="News" />
          <a href="/">News</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpriseMe} alt="Surprise Me" />
          <a href="/">Surprise me</a>
        </li>
      </ul>
    </nav>
  );
}
