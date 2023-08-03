import React from "react";
import styles from "./Tags.module.scss";

export default function Tags() {
  return (
    <div className={styles.tags}>
      <p>Search by tags:</p>
      <ul className={styles.tags__lista}>
        <li>Stars</li>
        <li>Galaxies</li>
        <li>Moon</li>
        <li>Planets</li>
      </ul>
    </div>
  );
}
