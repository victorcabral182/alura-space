import React from "react";
import Tags from "../Tags";
import pictures from "./pictures.json";
import styles from "./Gallery.module.scss";
import Cards from "../Cards";

export default function Gallery() {
  return (
    <>
      <section className={styles.galeria}>
        <div>
          <h2>Browse the gallery</h2>
          <Tags />
          <Cards items={pictures} styles={styles} />
        </div>
      </section>
    </>
  );
}
