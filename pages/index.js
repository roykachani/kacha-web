import { useContext, useEffect } from 'react';
import Link from 'next/link';

import { MainContext } from '../context/mainContext';
import { WorkContainer } from '../components/WorkContainer';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import works from '../utils/works';
import api from '../utils/api ';

import styles from '../styles/Home.module.css';

export default function Home({ result, open, setOpen }) {
  const { lang, getData, data } = useContext(MainContext);
  const { en, es } = works;
  const { eng, esp } = result;

  useEffect(() => {
    getData(result);
  }, []);

  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <section className={styles.welcome_container}>
        <span className={styles.welcome_span}>
          {lang === true ? eng.titles.welcome : esp.titles.welcome}
        </span>
        <h1>
          <div className={styles.line1}>
            {lang === true ? eng.titles.line1 : esp.titles.line1}
          </div>
          <div className={styles.lineBox}>
            <div className={styles.line2}>
              {lang === true ? eng.titles.line2 : esp.titles.line2}
            </div>
            <div className={styles.line3}>
              {lang === true ? eng.titles.line3 : esp.titles.line3}
            </div>
          </div>
        </h1>
        <Link href="/contact">
          <a className={styles.button_contact} href="/contact">
            {lang === true ? eng.contact_btn : esp.contact_btn}
          </a>
        </Link>
      </section>
      <section className={styles.projects_section_container}>
        <div className={styles.projects_title}>
          <h2>{lang === true ? eng.pages[0] : esp.pages[0]}</h2>
        </div>
        <div className={styles.projects_container}>
          {lang === true
            ? en.map((w, index) => (
                <div className={styles.project} key={index}>
                  <WorkContainer w={w} index={index} />
                </div>
              ))
            : es.map((w, index) => (
                <div className={styles.project} key={index}>
                  <WorkContainer w={w} index={index} lang={lang} />
                </div>
              ))}
        </div>
        <div className={styles.more_container}>
          <div>
            <Link href="https://www.github.com/roykachani">
              <a
                className={styles.more_btn}
                href="https://www.github.com/roykachani"
                target="_blank"
              >
                {lang === true ? eng.more_jobs : esp.more_jobs}
              </a>
            </Link>
          </div>
        </div>
      </section>
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
