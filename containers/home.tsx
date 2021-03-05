import {
  Box,
  Button,
  Container,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/theme/actions';
import { ThemeActions } from '../store/theme/types';
import { IRootState } from '../store';
import { ChangeEvent } from 'react';
type ReduxType = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps>;
const HomeContainer: React.FC<ReduxType> = ({ theme, setTheme }) => {
  const handleToggleDarkMode = (
    _e: ChangeEvent<HTMLInputElement>,
    value: boolean
  ) => {
    setTheme(value ? 'dark' : 'light');
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
          Login
        </Typography>
        <Box my={1} py={2}>
          <TextField
            placeholder='EMAIL ADDRESS'
            type='email'
            variant='outlined'
            size='small'
            color='primary'
          />
          <div className='my-2'>
            <Button
              variant='contained'
              color='primary'
              className='dark:text-white'
            >
              login
            </Button>
            <Button variant='outlined' className='ml-2  dark:text-white'>
              forgot
            </Button>
          </div>
          <p className='text-xl text-primary dark:text-white'>
            This is tailwind style
          </p>
        </Box>
        <div className='loading' />
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
