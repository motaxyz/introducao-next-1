import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"


export default function Home() {
  return (
    <div className="containerGlobal">
      <h1 className={styles.titleHomePage}>Aula Next JS</h1>
      <h2>Exemplo h2</h2>
      <h3>Exemplo h3</h3>
      <p>Texto parágrafo</p>
      <div className={styles.images}>
        <Image
          src="/logo2.jpg"
          width={50}
          height={50}
          alt="logo"
          className={styles.imageHomePage}
        />
        <Image
          src="/logo.png"
          width={786}
          height={156}
          alt="logo"
          className={styles.imageHomePage}
        />
        </div>
    </div>
  )
}