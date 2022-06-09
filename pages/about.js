import Head from 'next/head';
import Link from 'next/link';

import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About({ open, setOpen }) {
  return (
    <>
      <Head>
        <title>About | Roy Kachani</title>
      </Head>
      <Nav open={open} setOpen={setOpen} />
      <div className={styles.about_container}>
        <div className={styles.about_title}>
          <h1>About</h1>
        </div>
        <div className={styles.about_box}>
          <span className={styles.about}>
            Hi there! my name is{' '}
            <span className={styles.about_semiBold}>Roy Kachani</span> but
            everybody calls me: “Royk”. I&apos;m a 31 years old Software
            developer born in Buenos Aires city, Argentina.
            <br />
            I loved the web since I was a teenager. I began coding as a hobby in
            HTML &amp; CSS, and I was very excited about these technologies.
            Then, at 27, I began self-taught in JavaScript, and my mind started
            blowing.
            <br />
            <span className={styles.about_semiBold}>
              I always studied and learned on my own, and supported by some
              courses.
            </span>
            <br />
            Right now I&apos;m more focused on learning TypeScript.
            <br />
            And of course, as a good argentinian{' '}
            <span className={styles.about_semiBold}>
              I love soccer. Also listen radio, by the way I&apos;ve worked for
              many years on this area.
            </span>
            <br />
            If you want to have a nice talk, do not hesitate to contact me.
          </span>
          <Link href="/contact">
            <a className={styles.button_contact} href="/contact">
              Get in touch!
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
