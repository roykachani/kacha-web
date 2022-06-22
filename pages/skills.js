import { useContext, useEffect } from 'react';
import Head from 'next/head';

import { MainContext } from '../context/mainContext';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import skills from '../utils/skills';
import api from '../utils/api ';

import styles from '../styles/Skills.module.css';

export default function Skills({ result, open, setOpen }) {
  const { lang, getData, data } = useContext(MainContext);
  const { eng, esp } = result;

  useEffect(() => {
    getData(result);
  }, []);
  return (
    <>
      <Head>
        <title>
          {lang === true ? eng.info.skills.title : esp.info.skills.title}
        </title>
        <meta
          name="title"
          content={
            lang === true ? eng.info.skills.title : esp.info.skills.title
          }
        />
        <meta
          name="description"
          content={
            lang === true
              ? eng.info.skills.description
              : esp.info.skills.description
          }
        />
      </Head>
      <Nav open={open} setOpen={setOpen} />
      <div className={styles.skills_container}>
        <div className={styles.skills_title}>
          <h1>{lang === true ? eng.pages[1] : esp.pages[1]}</h1>
        </div>
        <div className={styles.skills_box}>
          {skills.map((skill) => (
            <div className={styles.skill} key={skill.name}>
              <div className={styles.icon}>{skill.icon}</div>
              <div>
                <span className={styles.name}>{skill.name}</span>
              </div>
            </div>
          ))}
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
