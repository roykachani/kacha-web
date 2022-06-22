import { useContext, useEffect } from 'react';
import Head from 'next/head';

import { MainContext } from '../context/mainContext';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { ContactF } from '../components/ContactF';

import styles from '../styles/Contact.module.css';
import api from '../utils/api ';

export default function Contact({ result, open, setOpen }) {
  const { lang, getData, data } = useContext(MainContext);
  const { eng, esp } = result;

  useEffect(() => {
    getData(result);
  }, []);

  if (lang === false)
    return (
      <>
        <Head>
          <title>{esp.info.contact.title}</title>
          <meta name="title" content={esp.info.contact.title} />
          <meta name="description" content={esp.info.contact.description} />
        </Head>
        <Nav open={open} setOpen={setOpen} />
        <div className={styles.contact_container}>
          <div className={styles.contact_title}>
            <h1>{esp.contact.title}</h1>
          </div>
          <div className={styles.contact}>
            <ContactF info={esp.contact} lang={lang} />
          </div>
        </div>
        <Footer />
      </>
    );
  return (
    <>
      <Head>
        <title>Contact | Roy Kachani</title>
        <meta name="title" content="Roy kachani | Software Developer" />
        <meta
          name="description"
          content="I'm Roy Kachani a Software developer born in Buenos Aires, Argentina."
        />
      </Head>
      <Nav open={open} setOpen={setOpen} />
      <div className={styles.contact_container}>
        <div className={styles.contact_title}>
          <h1>Contact me</h1>
        </div>
        <div className={styles.contact}>
          <ContactF />
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
