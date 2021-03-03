import { Container } from '@material-ui/core';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Container maxWidth='lg'>This is Home Screen</Container>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
export default Home;
