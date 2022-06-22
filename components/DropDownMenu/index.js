import { useContext } from 'react';
import Link from 'next/link';

import { MainContext } from '../../context/mainContext';

import styles from './styles.module.css';

export const DropDownMenu = () => {
  const { lang, data } = useContext(MainContext);

  const DropDownItem = (props) => {
    if (props.children == 'Resume')
      return (
        <Link href={'cv/roykachani2022_en.pdf'}>
          <a className={styles.menu_item}>{props.children}</a>
        </Link>
      );
    if (props.children == 'Resumen')
      return (
        <Link href={'cv/roykachani2022.pdf'}>
          <a className={styles.menu_item}>{props.children}</a>
        </Link>
      );
    return (
      <Link href={`/${props.href.toLowerCase()}`}>
        <a href={`/${props.href.toLowerCase()}`} className={styles.menu_item}>
          {props.children}
        </a>
      </Link>
    );
  };

  return (
    <div className={styles.dropdown}>
      <DropDownItem href={data.eng.pages[1]}>
        {lang === true ? data.eng.pages[1] : data.esp.pages[1]}
      </DropDownItem>
      <DropDownItem href={data.eng.pages[2]}>
        {lang === true ? data.eng.pages[2] : data.esp.pages[2]}
      </DropDownItem>
      <DropDownItem href={data.eng.pages[3]}>
        {lang === true ? data.eng.pages[3] : data.esp.pages[3]}
      </DropDownItem>
      <DropDownItem href={data.eng.pages[4]}>
        {lang === true ? data.eng.pages[4] : data.esp.pages[4]}
      </DropDownItem>
    </div>
  );
};
