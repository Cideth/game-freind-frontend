import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

import logo from '@public/Find_Game_Friends.png';
import Navigation from './Navigation';
import Search from './Search';
import UserActions from './UserActions';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image src={logo} alt='Logo image' priority width={200} height={60} />
      </Link>
      <Navigation />
      <Search />
      <UserActions />
    </header>
  );
};

export default Header;
