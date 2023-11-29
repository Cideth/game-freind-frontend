import Layout from '@/components/Layout';
import usePageTitle from '@/hooks/usePageTitle';

const Home = () => {
  usePageTitle('Home');

  return <Layout>Home</Layout>;
};

export default Home;
