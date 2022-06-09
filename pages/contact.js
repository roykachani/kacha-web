import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { ContactF } from '../components/ContactF';

import styles from '../styles/Contact.module.css';

export default function Contact({ open, setOpen }) {
  return (
    <>
      <Head>
        <title>Contact | Roy Kachani</title>
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
