import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { MainContext } from '../context/mainContext';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import api from '../utils/api ';

import styles from '../styles/About.module.css';

export default function About({ result, open, setOpen }) {
  const { lang, getData } = useContext(MainContext);
  const { eng, esp } = result;

  useEffect(() => {
    getData(result);
  }, []);

  if (lang === false)
    return (
      <>
        <Head>
          <title>{esp.info.about.title}</title>
          <meta name="title" content={esp.info.about.title} />
          <meta name="description" content={esp.info.about.description} />
        </Head>
        <Nav open={open} setOpen={setOpen} />
        <div className={styles.about_container}>
          <div className={styles.about_title}>
            <h1>{esp.pages[2]}</h1>
          </div>
          <div className={styles.about_box}>
            <span className={styles.about}>
              {esp.about.line1}
              <span className={styles.about_semiBold}>{esp.about.name}</span>
              {esp.about.line2}
              <br />
              {esp.about.line3}
              <br />
              <span className={styles.about_semiBold}>{esp.about.line4}</span>
              <br />
              {esp.about.line5}
              <br />
              {esp.about.line6}
              <span className={styles.about_semiBold}>{esp.about.line7}</span>
              <br />
              {esp.about.line8}
            </span>
            <Link href="/contact">
              <a className={styles.button_contact} href="/contact">
                {esp.contact_btn}
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Head>
        <title>About | Roy Kachani</title>
        <meta name="title" content={eng.info.about.title} />
        <meta name="description" content={eng.info.about.description} />
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

export const getStaticProps = async () => {
  const result = await api.get();

  return {
    props: {
      result,
    },
  };
};
