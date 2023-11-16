import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

import logo from '@public/Find_Game_Friends.png';
import Navigation from './Navigation';
import Search from './Search';
import SignIn from './SignIn';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image src={logo} alt='Logo image' priority width={170} height={35} />
      </Link>
      <Navigation />
      <Search />
      <SignIn />
    </header>
  );
};

export default Header;
