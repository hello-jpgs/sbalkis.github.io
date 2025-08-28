import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/ShortFilms.module.css';

const ShortFilms: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Short Films</title>
        <meta name="description" content="A collection of short films." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section1}>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>BETWEEN THE SILENCE + THE NOISE</h1>
              <p className={styles.year}>2025</p>
            </div>
            <div className={styles.credits}>
              <p><b>Writer/Director - Sara Balkis</b></p>
              <br />
              <p><b>DOP - Talal Akkad</b></p>
              <br />
              <p><b>Editors - Ghia Tadros & Sara Balkis</b></p>
              <br />
              <p><b>Sound Design - Yorgo El-Terek</b></p>
            </div>
            <div className={styles.description}>
              <p>
                A 10 minute fiction film that follows Julia, a young Lebanese-Canadian journalism student who
                lives with and cares for her reserved grandfather, Antoine. When a presentation in her journalism
                class on the Lebanese Civil War prompts her to question her family history, Julia begins to dig into
                their past. What secrets lie behind her grandfather's long standing silence? Julia's search
                threatens to change everything she thought she knew about herself and her family.
              </p>
            </div>
            <div className={styles.cast}>
              <p>Tracy Hawchar</p>
              <p>as Julia Boulos</p>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <p className={styles.postProductionText}>currently in post-production</p>
          <video className={styles.video} controls>
            <source src="/videos/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className={styles.section3}>
          <div className={styles.content}>
            <div className={styles.titleContainerEX}>
              <h1 className={styles.titleExile}>EXILE</h1>
              <p className={styles.year}>2024</p>
            </div>
            <div className={styles.descriptionExile}>
              <p>
                Nour is haunted by a mysterious sound from her past. She becomes increasingly disconcerted as it follows
                her closely throughout her day, growing louder and louder. When she decides to finally confront the source,
                she comes face to face with an indecipherable abyss of complete darkness where the boundaries between reality
                and memory blur.
              </p>
            </div>
            <div className={styles.creditsExile}>
              <p><b>Wisaal Jahangir as Nour</b></p>
              <br />
              <p><b>Writer/Director/Editor - Sara Balkis</b></p>
              <br />
              <p><b>Sound Design - José Ibanez, Louis Deng, Ryan Rokni</b></p>
            </div>
          </div>
        </section>
<section className={styles.section2}>
          <video className={styles.video} controls>
            <source src="/videos/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
<section className={styles.section4}>
          <div className={styles.content4}>
            <div className={styles.titleContainer4}>
              <h1 className={styles.title4}>From The River to The Sea</h1>
              <p className={styles.year4}>2023</p>
            </div>
            <div className={styles.description4}>
              <p>
                A 1 minute short film reflecting on my family's first and only visit to Occupied Palestine.
              </p>
            </div>
            <div className={styles.videoContainer4}>
              <video className={styles.video4} controls>
                <source src="/videos/3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShortFilms;