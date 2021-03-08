import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import LoginForm, { IState } from '../components/loginForm';

const Home = () => {
  const router = useRouter();
  const handleSubmit = (data: IState) => {
    console.log('try logging in : ', data);
    router.push('/market');
  };
  return (
    <div className='flex flex-col items-center'>
      <Typography variant='h4' className='login-title text-focus-in'>
        เข้าสู่ระบบ
      </Typography>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
export default Home;
