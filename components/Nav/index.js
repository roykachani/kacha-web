import { useContext } from 'react';
import Link from 'next/link';

import { DropDownMenu } from '../DropDownMenu';
// import { MainContext } from '../../context/MainContext';
import MenuIcon from '../Icons/MenuIcon';

import styles from './styles.module.css';
import { MainContext } from '../../context/mainContext';

export const Nav = ({ open, setOpen }) => {
  const { lang, changeLang } = useContext(MainContext);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.nav_items}>
            <div className={styles.box_logo}>
              <Link href="/">
                <a>
                  <img
                    className={styles.logo}
                    src="/logo_Roy.png"
                    alt="logo image"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.avatar}>
              <button
                type="button"
                className={styles.button}
                onClick={() => setOpen(!open)}
              >
                <img
                  loading="lazy"
                  className={styles.img}
                  alt="Roy-img"
                  src="/me1.jpg"
                />
                <div className={styles.menuIcon}>
                  <MenuIcon />
                </div>
              </button>
              <div className={styles.btn_lang}>
                <span onClick={changeLang} className={styles.lang_text}>
                  {lang === true ? 'EN' : 'ES'}
                </span>
              </div>
              {!!open && (
                <div className={styles.dropDownMenu_container}>
                  <DropDownMenu />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
