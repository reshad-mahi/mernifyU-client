import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
// import Grid from '@mui/material/Grid'; // No longer using Grid
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, alignItems: 'center' }}>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6" gutterBottom>
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link to="/">
              <Button variant="contained">Back Home</Button>
            </Link>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="Not Found"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
