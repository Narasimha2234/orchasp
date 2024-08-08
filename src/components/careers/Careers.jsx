import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { careersData } from './careersData';
import CareerCard from './CareerCard';

const Careers = () => {
  return (
    <Box>
       <Box
        sx={{
          height: { xs: '40vh', sm: '50vh', md: '70vh' },
          width: '100%',
          backgroundImage: 'url(https://orchasp.com/wp-content/uploads/2021/07/Banner-1-3.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            right: { xs: '5%', sm: '10%', md: '15%' },
            top: '40%',
            fontSize: { xs: '1.2rem', sm: '2rem', md: 'h4' },
          }}
          color={'white'}
        >
          There’s Automation In Fitting <br />
          Our Culture To Our People.<br />
          Join Us!
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#92E2FF' }}>
        <Box
          sx={{
            width: '90%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
          mb={10}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '35%' },
              height: { xs: '200px', md: '400px' },
              backgroundImage: 'url(https://orchasp.com/wp-content/uploads/2021/07/Image-1-1.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              mt: 5,
            }}
          ></Box>
          <Box sx={{ width: { xs: '100%', md: '58%' }, mt: 5 }}>
            <Stack spacing={3} margin={{ xs: 2, md: 4}}>
              <Typography variant='h5' color={'primary'}>
              Life at Orchasp
              </Typography>
              <Typography textAlign={'justify'}>
                At Orchasp, we do things differently. We approach technology with intuition, and create solutions that make a difference. All this, while having a whole lot of fun!
              </Typography>
              <Typography variant='h5' color={'primary'}>
                Work Culture
              </Typography>
              <Typography textAlign={'justify'}>
                We believe in creating a space that inspires creativity and innovative thinking. We value each member of our team and have faith in their prowess. We give everyone equal opportunities to excel by believing, investing and enabling them. We are a workforce driven by ethical practices and that’s something that we never compromise on.
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Divider variant='middle' sx={{ marginTop: '10px' }} />
        <Box mt={2} mb={5}>
          
          <Box sx={{ p: 3}}>
         
            <Stack spacing={3} alignItems="center">
            <Typography variant='h4'> Careers at Orchasp</Typography>
              {careersData.map((career) => (
                <CareerCard key={career.id} career={career} />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Careers;
