import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Grid from '@mui/material/Grid'; // No longer using Grid
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Form } from 'react-router-dom'; // Changed

const Login = () => {
  // handleSubmit function removed
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* Changed from Box to Form, removed onSubmit and sx */}
        <Form method="post" noValidate style={{ marginTop: "8px", width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            sx={{ display: 'flex', justifyContent: 'flex-start', margin: 0 }}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link to="/">
            <Button type="submit" fullWidth variant="outlined" sx={{ mb: 2 }}>
              Skip Authentication
            </Button>
          </Link>
          {/* Changed from Grid container to Box */}
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: 2 }}>
            {/* Changed from Grid to Box */}
            <Box>
              <Typography variant="body2" color="primary">
                Forgot password?
              </Typography>
            </Box>
            {/* Changed from Grid to Box */}
            <Box>
              <Typography variant="body2">
                {"Don't have an account? Sign Up"}
              </Typography>
            </Box>
          </Box>
        </Form> {/* Changed from </Box> to </Form> */}
      </Box>
    </Container>
  );
};

export default Login;
