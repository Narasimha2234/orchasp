import React from 'react';
import { Box, TextField, Button, Typography, Link, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '350px',
  background: 'linear-gradient(0deg, #fff 0%, #f4f7fb 100%)',
  borderRadius: '40px',
  padding: '25px 35px',
  border: '5px solid #fff',
  boxShadow: 'rgba(133, 189, 215, 0.878) 0px 30px 30px -20px',
  margin: '20px auto',
}));

const InputField = styled(TextField)(({ theme }) => ({
  width: '100%',
  background: '#fff',
  borderRadius: '20px',
  marginTop: '15px',
  boxShadow: '#cff0ff 0px 10px 10px -5px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '20px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputLabel-outlined': {
    color: 'rgb(170, 170, 170)',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  background: 'linear-gradient(45deg, #000 0%, #707070 100%)',
  border: '5px solid #fff',
  padding: '5px',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  boxShadow: 'rgba(133, 189, 215, 0.878) 0px 12px 10px -8px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.2)',
  },
  '&:active': {
    transform: 'scale(0.9)',
  },
}));

const SignInForm = () => {
  return (
    <Container>
      <Typography variant="h4" component="div" sx={{ textAlign: 'center', fontWeight: '900', fontSize: '30px', color: 'rgb(16, 137, 211)' }}>
        Sign In
      </Typography>
      <Box component="form" sx={{ marginTop: '20px' }}>
        <InputField
          required
          variant="outlined"
          label="E-mail"
          type="email"
          name="email"
          id="email"
        />
        <InputField
          required
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          id="password"
        />
        <Link href="#" sx={{ display: 'block', marginTop: '10px', marginLeft: '10px', fontSize: '11px', color: '#0099ff', textDecoration: 'none' }}>
          Forgot Password?
        </Link>
        <Button
          type="submit"
          variant="contained"
          sx={{
            display: 'block',
            width: '100%',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%)',
            color: 'white',
            paddingBlock: '15px',
            margin: '20px auto',
            borderRadius: '20px',
            boxShadow: 'rgba(133, 189, 215, 0.878) 0px 20px 10px -15px',
            border: 'none',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: 'rgba(133, 189, 215, 0.878) 0px 23px 10px -20px',
            },
            '&:active': {
              transform: 'scale(0.95)',
              boxShadow: 'rgba(133, 189, 215, 0.878) 0px 15px 10px -10px',
            },
          }}
        >
          Sign In
        </Button>
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '10px', color: 'rgb(170, 170, 170)' }}>
          Or Sign in with
        </Typography>
        <Grid container justifyContent="center" spacing={2} sx={{ marginTop: '5px' }}>
          <Grid item>
            <SocialButton>
              <GoogleIcon sx={{ color: 'white' }} />
            </SocialButton>
          </Grid>
          <Grid item>
            <SocialButton>
              <AppleIcon sx={{ color: 'white' }} />
            </SocialButton>
          </Grid>
          <Grid item>
            <SocialButton>
              <TwitterIcon sx={{ color: 'white' }} />
            </SocialButton>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '15px' }}>
        <Link href="#" sx={{ textDecoration: 'none', color: '#0099ff', fontSize: '9px' }}>
          Learn user licence agreement
        </Link>
      </Typography>
    </Container>
  );
};

export default SignInForm;
