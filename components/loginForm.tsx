import { Box, Button, TextField } from '@material-ui/core';
import React from 'react';
interface IProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const LoginForm: React.FC<IProps> = ({ onSubmit }) => {
  return (
    <Box className='my-1 py-2 w-72' my={1} py={2} width={280}>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col'>
          <TextField
            placeholder='EMAIL ADDRESS'
            type='email'
            variant='outlined'
            size='small'
            color='primary'
            className='my-1'
            required
          />
          <TextField
            placeholder='PASSWORD'
            type='password'
            variant='outlined'
            size='small'
            color='primary'
            className='my-1'
            required
          />
        </div>
        <div className='my-2 flex justify-end'>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className='text-black dark:text-white'
          >
            ยืนยัน
          </Button>
          <Button variant='outlined' className='ml-2'>
            ลืมรหัสผ่าน
          </Button>
        </div>
      </form>
      {/* <p className='text-xl text-primary dark:text-white'>
            This is tailwind style
          </p> */}
    </Box>
  );
};

export default LoginForm;
