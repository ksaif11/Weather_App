import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#' }}>
      <Toolbar>
        <Typography variant="h6">Weather App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;