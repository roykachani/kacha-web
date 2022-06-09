import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { WorkContainer } from '../components/WorkContainer';
import styles from '../styles/Home.module.css';
import works from '../utils/works';

export default function Home({ open, setOpen }) {
  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      <section className={styles.welcome_container}>
        <span className={styles.welcome_span}>Hello, I&apos;m a</span>
        <h1>
          <div className={styles.line1}>Software Developer</div>
          <div className={styles.lineBox}>
            <div className={styles.line2}>from </div>
            <div className={styles.line3}>Argentina</div>
          </div>
        </h1>
        <Link href="/contact">
          <a className={styles.button_contact} href="/contact">
            Get in touch!
          </a>
        </Link>
      </section>
      <section className={styles.projects_section_container}>
        <div className={styles.projects_title}>
          <h2>JOBS & PROJECTS</h2>
        </div>
        <div className={styles.projects_container}>
          {works.map((w, index) => (
            <div className={styles.project} key={index}>
              <WorkContainer w={w} index={index} />
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
                More stuff on GitHub
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
