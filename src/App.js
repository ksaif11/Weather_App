import React from 'react';
import { Container, AppBar, Toolbar, Typography, Box } from '@mui/material';
import Weather from './components/Weather';

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Weather App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: 30, marginBottom: 40 }}>
        <Weather />
      </Container>
      <footer style={{ textAlign: 'center', backgroundColor: '#f5f5f5', padding: '10px 0', position: 'fixed', bottom: 0, width: '100%' }}>
        <Typography variant="body2">
          Weather data provided by OpenWeatherMap
        </Typography>
      </footer>
    </Box>
  );
}

export default App;
