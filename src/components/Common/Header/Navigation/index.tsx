import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Link href='/lol'>LOL</Link>
        </li>
        <li>
          <Link href='/aram'>ARAM</Link>
        </li>
        <li>
          <Link href='/valorant'>Valorant</Link>
        </li>
        <li>
          <Link href='overwatch'>Overwatch</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
