import { useEffect } from 'react';
import useTitleStore from '@/store/titleStore';

const usePageTitle = (title: string) => {
  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);
};

export default usePageTitle;
