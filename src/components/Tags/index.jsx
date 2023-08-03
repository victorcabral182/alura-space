import React from "react";
import styles from "./Tags.module.scss";
import pictures from "../Gallery/pictures.json";

export default function Tags({ tags, filterPics, setItems }) {
  return (
    <div className={styles.tags}>
      <p>Search by tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterPics(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItems(pictures)}>All</li>
      </ul>
    </div>
  );
}
