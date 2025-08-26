import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sara Balkis</title>
        <meta name="description" content="Sara Balkis portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={`${styles.section} ${styles.bg1}`}>
          <div className={styles.nameContainer}>
            <p className={styles.writer}>writer - director - editor</p>
            <h1 className={styles.name}>sara balkis</h1>
            <h1 className={styles.nameArabic}>سارة بلقيس</h1>
          </div>
        </div>
        <div className={`${styles.section} ${styles.bg22}`}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>about me</h2>
          </div>
          <p className={styles.description}>
          I’m a Palestinian  filmmaker based in Canada. The core tenet of my work is to uplift my people’s struggle for liberation. In the last two years, I’ve focused on producing and editing videos for the Palestinian Movement, while also creating several short films. 

          </p>
          <p className={styles.description}>
          Earlier this year, I was selected as a filmmaker in residence at the 2025 Toronto Palestine Film Festival, where my latest short film Between the Silence and The Noise will premiere in September of this year, currently in post-production.
          </p>
        </div>
        <div className={`${styles.section} ${styles.bg22}`}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>short films</h2>
          </div>
          <p className={styles.description}>
            Click on "VIEW PAGE" to navigate to the films, then scroll.
          </p>
          <Link href="/view" className={styles.viewPage}>VIEW PAGE</Link>
          <div className={styles.filmList}>
            <p>BETWEEN THE SILENCE + THE NOISE (2025)</p>
            <p>EXILE (2024)</p>
            <p>From The River to The Sea (2023)</p>
          </div>
        </div>
      </main>
    </>
  );
}
