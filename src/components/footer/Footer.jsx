import React from 'react';
import { Box, Typography, Container, Grid, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        bgcolor: 'background.paper', 
        py: 6, 
        px: { xs: 2, sm: 3 }, 
        borderTop: '1px solid', 
        borderColor: 'divider', 
        width: '100%',
        // mt: 'auto', 
      }}
    >
      <Container maxWidth="lg"> 
        <Grid container spacing={4} justifyContent="center"> 
          <Grid item xs={12} sm={3}>
            <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              Orchasp Limited
            </Typography>
            <Typography variant="body2" gutterBottom>
              CIN: L72200TG1994PLC017485
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant='body2' color="textSecondary">Copyright 2022</Typography>
              <Typography variant='body2' color="textSecondary">19 & 20, Moti Valley,</Typography>
              <Typography variant='body2' color="textSecondary">Trimulgherry, Secunderabad - 500 015,</Typography>
              <Typography variant='body2' color="textSecondary">Telangana, INDIA.</Typography>
              <Typography variant='body2' color="textSecondary">E: info@orchasp.com</Typography>
              <Typography variant='body2' color="textSecondary">Tel: +91-40-4776 6123 / 124</Typography>
              <Typography variant='body2' color="textSecondary">Fax: +91-40-4776 6143</Typography>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Stack spacing={0.5}>
              <Typography sx={{textDecoration:"none"}} component={Link} to={"/contactus"} variant="body2" color="textSecondary">Contact Us</Typography>
              <Typography sx={{textDecoration:"none"}} component={Link} to={"/careers"} variant="body2" color="textSecondary">Careers</Typography>
              <Typography sx={{textDecoration:"none"}} component={Link} to={"/industries"} variant="body2" color="textSecondary">Industries</Typography>
              <Typography sx={{textDecoration:"none"}} component={Link} to={"/patner_with_us"} variant="body2" color="textSecondary">Partner With Us</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              Legal
            </Typography>
            <Stack spacing={0.5}>
              <Typography component={Link} to={"/privacypolicy"} color="textSecondary" sx={{textDecoration:"none"}} variant="body2">Privacy Policy</Typography>
              <Typography component={Link} to={"/termsofuse"} color="textSecondary" sx={{textDecoration:"none"}} variant="body2">Terms of use</Typography>
              <Typography component={Link} to={"/disclaimer"} color="textSecondary" sx={{textDecoration:"none"}} variant="body2">Disclaimer</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
              Social Media
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <IconButton sx={{ '&:hover': { color: 'blue' } }} href='https://www.facebook.com/OrchaspLimited/' target='_blank'><FacebookIcon /></IconButton>
              <IconButton sx={{ '&:hover': { color: 'blue' } }} href='https://x.com/i/flow/login?redirect_after_login=%2Forchasp' target='_blank'><TwitterIcon /></IconButton>
              <IconButton sx={{ '&:hover': { color: 'blue' } }} href='https://www.linkedin.com/company/orchasp-limited/' target='_blank'><LinkedInIcon /></IconButton>
            </Stack>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Footer;
