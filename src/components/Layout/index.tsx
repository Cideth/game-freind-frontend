import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import CustomHead from '@/utils/CustomHead';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <CustomHead title={title} />
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
