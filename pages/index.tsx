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
            <h1 className={styles.nameArabic}>سارة بلقيس</h1>
            <h1 className={styles.writer}>writer - director - editor</h1>
            <h1 className={styles.name2}>sara balkis</h1>
          </div>
        </div>
        <div className={`${styles.section} ${styles.bg22}`}>
          <div className={styles.titleContainer}>
            <div className={styles.paperclip}></div>
            <h2 className={styles.title}>about</h2>
          </div>
          <p className={`${styles.description} ${styles.aboutDescription}`}>
          Sara Balkis is an emerging Palestinian filmmaker and writer based in Montreal, Canada. Her work often explores themes of exile, collective memory and resistance, with the ultimate goal of supporting the Palestinian struggle for liberation from the diaspora.
          </p>
          <p className={`${styles.description} ${styles.aboutDescription}`}>
          She was selected as a filmmaker in residence for the Toronto Palestine Film Festival, where he latest short film Between the Silence and the Noise will premiere in September 2025. She is completing a BFA in Film Production at Concordia University.</p>
        </div>
        <div className={`${styles.section} ${styles.bg22inv}`}>
          <div className={styles.titleContainer}>
            <div className={styles.paperclipRight}></div>
            <h2 className={styles.title}>short films</h2>
          </div>
          <p className={styles.description}>
            Click on "VIEW PAGE" to navigate to the films, then scroll.
          </p>
          <div className={styles.shortFilmsContent}>
            <Link href="/short-films" className={styles.viewPage}>VIEW PAGE</Link>
            <div className={styles.filmList}>
              <p>BETWEEN THE SILENCE + THE NOISE (2025)</p>
              <p>EXILE (2024)</p>
              <p>From The River to The Sea (2023)</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
