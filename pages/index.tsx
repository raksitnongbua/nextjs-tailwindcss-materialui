import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';

const Home = () => {
  return (
    <div className='p-4 flex flex-center'>
      <Container maxWidth='lg'>
        <Typography variant='h4' color='primary'>
          Login
        </Typography>
        <Box my={1} py={2}>
          <TextField
            placeholder='EMAIL ADDRESS'
            type='email'
            variant='outlined'
            size='small'
          />
          <div className='my-2'>
            <Button variant='outlined' color='primary'>
              submit
            </Button>
          </div>
        </Box>
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
