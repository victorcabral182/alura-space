import React from "react";
import styles from "./Popular.module.scss";
import popular from "./popular.json";

export default function Popular() {
  return (
    <aside className={styles.populares}>
      <h2>Popular</h2>
      <ul className={styles.populares__imagens}>
        {popular.map((picture) => (
          <li key={picture.id}>
            <img src={picture.path} alt={picture.alt} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
