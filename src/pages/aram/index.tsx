import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { titleState } from '@/core/atoms/titleState';
import Layout from '@/components/Layout';

const Aram = () => {
  const [title, setTitle] = useRecoilState(titleState);

  useEffect(() => {
    setTitle('Aram Page');
  }, [setTitle]);

  return <Layout>{title}</Layout>;
};

export default Aram;
