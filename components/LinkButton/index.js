import Link from 'next/link';

import styles from './styles.module.css';

export const LinkButton = ({ url, type, lang }) => {
  return (
    <>
      <Link href={url}>
        <a className={styles.linkbutton} href={url} target="_blank">
          {type === 'Project'
            ? 'Open project'
            : type === 'Proyecto' && 'Ver Proyecto'}
          {type === 'Job' ? 'Job' : type === 'Trabajo' && 'Ver Trabajo'}
        </a>
      </Link>
    </>
  );
};
