import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = 'Default Title' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Clone of duo.op.gg using Next.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      {/* Header Content */}
    </header>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      {/* Footer Content */}
    </footer>
  </>
);

export default Layout;
