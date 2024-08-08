import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { cardData } from './mediaData';

const Media = () => {
  return (
    <Box>
      <Box sx={{
        height: { xs: '50vh', sm: '60vh', md: '70vh' },
        width: '100%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <video
          src='https://orchasp.com/wp-content/uploads/2021/07/Orchasp-Media.mp4'
          autoPlay
          loop
          muted
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            right: { xs: '2%', sm: '5%' },
            top: { xs: '50%', sm: '60%' },
            fontSize: { xs: 'h6.fontSize', sm: 'h4.fontSize' },
            color: 'white'
          }}
          variant='h4'
        >
          Our Media
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#92E2FF', py: { xs: 4, sm: 6 } }}>
        <Box
          sx={{
            width: { xs: '95%', sm: '90%' },
            margin: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'space-between',
            gap: 3
          }}
          mb={10}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '35%' },
              height: { xs: 'auto', sm: '400px' },
              backgroundImage: 'url(https://orchasp.com/wp-content/uploads/2021/07/Baner-2-Image.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            mt={5}
          />
          <Box sx={{ width: { xs: '100%', sm: '58%' }, mt: 4 }}>
            <Stack spacing={3} margin={3}>
              <Typography variant='h4' color={'primary'}>
                Press Reports
              </Typography>
              <Typography textAlign={'justify'} variant='h6' lineHeight={2}>
                We are pleased to inform the members that the company has been approved by Centre for Railway Information Systems (CRIS), New Delhi for providing IT Services. CRIS have released their first contract for conversion of Freight Operating Information System (FOIS) from existing VB application to Web Based model.
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Divider variant='middle' sx={{ marginTop: '10px' }} />
        <Box mt={10} mb={5}>
          <CardGrid cardData={cardData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Media;




 const CardGrid = ({ cardData }) => {
  return (
    <Box sx={{ width: { xs: '95%', sm: '90%' }, margin: 'auto', backgroundColor: '#92E2FF' }}>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none' }}>
              <CardMedia
                component="img"
                height="300"
                image={card.img}
                alt={card.title}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  variant="outlined"
                  textAlign="center"
                  href={card.path}
                  target='_blank'
                  sx={{ color: 'white', backgroundColor: 'blue' }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
