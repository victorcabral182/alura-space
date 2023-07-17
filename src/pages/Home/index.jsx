import { Header } from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../assets/banner.png";
import styles from "./Home.module.scss"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>The most complete gallery in space</h1>
            <img src={Banner} alt="Earth seen from space" />
          </div>
        </section>
      </main>
    </>
  );
}
