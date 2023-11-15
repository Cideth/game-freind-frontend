import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { titleState } from '@/core/atoms/titleState';
import Layout from '@/components/Layout';

const Home = () => {
  const [title, setTitle] = useRecoilState(titleState);

  useEffect(() => {
    setTitle('Find Game Friends');
  }, [setTitle]);

  return <Layout>{title}</Layout>;
};

export default Home;
