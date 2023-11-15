import Head from 'next/head';
import React from 'react';

const CustomHead = ({ title = 'default Title' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Clone of duo.op.gg using Next.js' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default CustomHead;
