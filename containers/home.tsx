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
const HomeContainer: React.FC<ReduxType> = ({ setTheme }) => {
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
            onChange={handleToggleDarkMode}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
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
            <Button variant='contained' color='primary'>
              submit
            </Button>
          </div>
        </Box>
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
