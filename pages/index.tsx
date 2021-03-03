import React from 'react';
import HomeContainer from '../containers/home';

const Home = () => {
  return <HomeContainer />;
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
export default Home;
