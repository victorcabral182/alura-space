import React from "react";
import open from "../../assets/open.png";
import heart from "../../assets/favorito.png";

export default function Card({ item, styles }) {
  return (
    <li key={item.id} className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={open} alt="Heart Icon" />
          <img src={heart} alt="Icon Open Modal" />
        </span>
      </div>
    </li>
  );
}
