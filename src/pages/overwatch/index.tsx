import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { titleState } from '@/core/atoms/titleState';
import Layout from '@/components/Layout';

const OverWatch = () => {
  const [title, setTitle] = useRecoilState(titleState);

  useEffect(() => {
    setTitle('OverWatch Page');
  }, [setTitle]);

  return <Layout>{title}</Layout>;
};

export default OverWatch;
