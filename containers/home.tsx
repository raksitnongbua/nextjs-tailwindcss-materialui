import { Container, Switch, Typography } from '@material-ui/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/theme/actions';
import { ThemeActions } from '../store/theme/types';
import { IRootState } from '../store';
import React, { ChangeEvent } from 'react';
import LoginForm, { IState } from '../components/loginForm';
import BuyForm from '../components/buyForm';

type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;

const HomeContainer: React.FC<ReduxType> = ({ theme, setTheme }) => {
  const handleToggleDarkMode = (
    _e: ChangeEvent<HTMLInputElement>,
    value: boolean
  ) => {
    setTheme(value ? 'dark' : 'light');
  };
  const handleSubmit = (data: IState) => {
    console.log('try logging in : ', data);
  };
  return (
    <div className='p-4 flex'>
      <Container maxWidth='lg'>
        <div className='flex flex-row-reverse'>
          <Switch
            color='primary'
            name='darkModeChecked'
            checked={theme === 'dark'}
            onChange={handleToggleDarkMode}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
        <Typography variant='h4' className='login-title text-focus-in'>
          เข้าสู่ระบบ
        </Typography>
        <LoginForm onSubmit={handleSubmit} />
        <BuyForm />
        {/* <div className='loading' /> */}
      </Container>
    </div>
  );
};

const mapDispatcherToProps = (dispatch: Dispatch<ThemeActions>) => {
  return {
    setTheme: (theme: string) => dispatch(actions.setTheme(theme)),
  };
};
const mapStateToProps = ({ theme: data }: IRootState) => {
  const { theme } = data;
  return { theme };
};
const connected = connect(mapStateToProps, mapDispatcherToProps)(HomeContainer);
export default connected;
