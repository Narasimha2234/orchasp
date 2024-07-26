import { Box, Stack, Typography, Paper, Card, CardContent } from '@mui/material';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PatnerWithUsForm from '../form/PatnerWithUsForm';

const mapStyles = {
  height: '50vh',
  width: '100%',
};

const defaultCenter = {
  lat: 28.6139, // Default latitude (Example: New Delhi, India)
  lng: 77.209,
};

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: '#92E2FF' }}>
      <Box
        sx={{
          height: { xs: '50vh', sm: '60vh', md: '70vh' },
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <video
          src="https://orchasp.com/wp-content/uploads/2021/07/Orchasp-partner-with-us-1.mp4"
          autoPlay
          loop
          muted
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            right: { xs: '2%', sm: '5%' },
            top: { xs: '50%', sm: '60%' },
            fontSize: { xs: 'h6.fontSize', sm: 'h4.fontSize' },
            color: 'white',
          }}
          variant="h4"
        >
          TURN YOUR EXPERTISE INTO A <br /> REVOLUTION.
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
              backgroundImage: 'url(https://orchasp.com/wp-content/uploads/2021/07/Image.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              mt: 5,
            }}
          ></Box>
          <Box sx={{ width: { xs: '100%', md: '58%' }, mt: 5 }}>
            <Stack spacing={3} margin={{ xs: 2, md: 8 }}>
              <Typography variant="h4" color={'primary'}>
                Great partnerships do start with a ping.
              </Typography>
              <Typography textAlign={'justify'} variant="h6">
                Extend an arm, and we will create a body of work that’s unmatched <br /> and inspired.
              </Typography>
              <Typography textAlign={'justify'} variant="h6">
                Just drop us a message, and we’ll get back to you.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#92E2FF' }}>
        <PatnerWithUsForm />
      </Box>
      <Box sx={{ position: 'relative', mt: 5 }}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
            <Marker position={defaultCenter} />
            <Paper
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '10px',
                backgroundColor: 'white',
              }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6">Selected Location</Typography>
                  <Typography variant="body2">Latitude: {defaultCenter.lat}</Typography>
                  <Typography variant="body2">Longitude: {defaultCenter.lng}</Typography>
                </CardContent>
              </Card>
            </Paper>
          </GoogleMap>
        </LoadScript>
      </Box>
    </Box>
  );
};

export default ContactUs;
