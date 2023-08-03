import React, { useState } from "react";
import Tags from "../Tags";
import pictures from "./pictures.json";
import styles from "./Gallery.module.scss";
import Cards from "../Cards";

export default function Gallery() {
  const [items, setItems] = useState(pictures); //Jason das imagens
  const tags = [...new Set(pictures.map((item) => item.tag))]; //Não os repete os itens de mesmo valor

  const filterPics = (tag) => {
    const filteredPictures = pictures.filter((pic) => {
      return pic.tag === tag;
    });
    setItems(filteredPictures);
  };

  return (
    <>
      <section className={styles.galeria}>
        <div>
          <h2>Browse the gallery</h2>
          <Tags tags={tags} filterPics={filterPics} setItems={setItems} />
          <Cards items={items} styles={styles} />
        </div>
      </section>
    </>
  );
}
