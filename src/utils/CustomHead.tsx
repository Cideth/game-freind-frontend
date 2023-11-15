import Head from 'next/head';
import { useRecoilValue } from 'recoil';

import { titleState } from '@/core/atoms/titleState';

const CustomHead = () => {
  const title = useRecoilValue(titleState);

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Clone of duo.op.gg using Next.js' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default CustomHead;
