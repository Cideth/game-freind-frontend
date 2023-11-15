import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { titleState } from '@/core/atoms/titleState';
import Layout from '@/components/Layout';

const Valorant = () => {
  const [title, setTitle] = useRecoilState(titleState);

  useEffect(() => {
    setTitle('Valorant Page');
  }, [setTitle]);

  return <Layout>{title}</Layout>;
};

export default Valorant;
