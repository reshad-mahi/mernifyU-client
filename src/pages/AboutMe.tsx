import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const AboutMe: React.FC = () => {
  return (
    <Paper sx={{ py: { xs: 4, md: 8 }, backgroundColor: 'grey.100' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 6 } }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            About Me
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Welcome to my personal space! Here's a little bit about who I am and what I do.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              John Doe
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              I am a passionate software developer with a love for creating innovative solutions and exploring new technologies. I have experience in building web applications using modern frameworks like React and Node.js.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              My journey in tech started with a curiosity for how things work, and it has grown into a fulfilling career where I can bring ideas to life. When I'm not coding, I enjoy hiking, reading, and spending time with my family.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              This page is a small glimpse into my world. Feel free to connect with me through my social channels or drop me an email!
            </Typography>
          </Box>
          <Box sx={{ flexShrink: 0, textAlign: 'center' }}>
            <img
              src="https://via.placeholder.com/300" // Placeholder image
              alt="John Doe"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default AboutMe;
