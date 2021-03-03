import { Container, Typography } from '@material-ui/core';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Typography> This is Home Screen</Typography>
      </Container>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
export default Home;
