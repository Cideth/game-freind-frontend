import useTitleStore from '@/store/titleStore';
import Head from 'next/head';

const CustomHead = () => {
  const { title } = useTitleStore();

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Clone of duo.op.gg using Next.js' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default CustomHead;
