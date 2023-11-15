import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

import logo from '@public/Game_friends.png';
import Navigate from './Navigate';
import Search from './Search';
import UserActions from './UserActions';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt='Logo' />
      </div>
      <Navigate />
      <Search />
      <UserActions />
    </header>
  );
};

export default Header;
