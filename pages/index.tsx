import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return <div>This is Home Screen</div>;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}
export default Home;
