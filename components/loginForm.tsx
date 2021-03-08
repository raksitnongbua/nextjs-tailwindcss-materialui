import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
interface IProps {
  onSubmit: (data: IState) => void;
}
export interface IState {
  email: string;
  password: string;
}
const initialState: IState = {
  email: '',
  password: '',
};
const LoginForm: React.FC<IProps> = ({ onSubmit }) => {
  const router = useRouter();
  const [data, setData] = useState<IState>(initialState);
  const handleResetPassword = () => {
    router.push('/reset-password');
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(data);
  };
  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.persist();
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return (
    <Box className='my-1 py-2 w-72'>
      <form onSubmit={handleSubmit} onReset={handleResetPassword}>
        <div className='flex flex-col'>
          <TextField
            placeholder='EMAIL ADDRESS'
            type='email'
            variant='outlined'
            size='small'
            color='primary'
            className='my-1'
            required
            onChange={handleTextFieldChange}
            name='email'
          />
          <TextField
            placeholder='PASSWORD'
            type='password'
            variant='outlined'
            size='small'
            color='primary'
            className='my-1'
            required
            onChange={handleTextFieldChange}
            name='password'
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
          <Button variant='outlined' className='ml-2' type='reset'>
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
