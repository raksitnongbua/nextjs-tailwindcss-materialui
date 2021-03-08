import { AppBar, PaletteMode, Switch, Toolbar } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

interface IProps {
  theme: PaletteMode;
  onModeChange: (value: boolean) => void;
}

const Header: React.FC<IProps> = ({ theme, onModeChange }) => {
  const handleSwitchChange = (_e: any, value: boolean) => {
    onModeChange(value);
  };
  return (
    <AppBar position='static' color='inherit'>
      <Toolbar className='flex justify-between'>
        <div className='flex'>
          <div className='mr-4'>
            <Link href='/'>LOGO</Link>
          </div>
          <Link href='/market'>ตลาดซื้อขาย</Link>
          <div className='mr-4'></div>
        </div>
        <Switch
          color='primary'
          name='darkModeChecked'
          inputProps={{ 'aria-label': 'primary checkbox' }}
          onChange={handleSwitchChange}
          checked={theme === 'dark'}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
