import React, { useState } from 'react';
import { fetchWeather } from '../services/api';
import { Container, TextField, Button, CircularProgress, Typography, Paper, Grid } from '@mui/material';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              label="Enter city"
              variant="outlined"
              fullWidth
              value={city}
              onChange={handleCityChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" onClick={handleSearch} fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
        {loading && <CircularProgress style={{ marginTop: 20 }} />}
        {error && (
          <Typography variant="body2" color="error" style={{ marginTop: 20 }}>
            {error}
          </Typography>
        )}
        {weatherData && (
          <div style={{ marginTop: 20 }}>
            <Typography variant="h6">{weatherData.name}</Typography>
            <Typography>{weatherData.weather[0].description}</Typography>
            <Typography>{`Temperature: ${weatherData.main.temp}°C`}</Typography>
            <Typography>{`Humidity: ${weatherData.main.humidity}%`}</Typography>
            <Typography>{`Wind Speed: ${weatherData.wind.speed} m/s`}</Typography>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default Weather;
