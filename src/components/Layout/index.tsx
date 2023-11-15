import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import CustomHead from '@/utils/CustomHead';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <CustomHead />
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
