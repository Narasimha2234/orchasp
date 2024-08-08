import React from 'react';
import {  Box,  Container,  Grid, Stack, Typography } from '@mui/material';
import { bannerVideos,  cardData,  chartData } from './data';

import HomeVideoSlider from '../sliders/HomeVideoSlider';

import LineChart from '../charts/LineChart';
import {  useTheme as useMuiTheme } from '@mui/material/styles';
import ClientsCarousal from '../home/ClientsCarousal';


import FutureBlock from './FutureBlock';
import CardGrid from './CardGrid';
import WithResultsWeRise from './WithResultsWeRise';
import AiAndIot from './AiAndIot';
import StockInfo from './StockInfo';
import AnnualReports from './AnnualReports';
import Announcements from './Announcements';





const Home = () => {
  const theme = useMuiTheme();


  return (
    <Box sx={{ width: "100%" }}>
      <HomeVideoSlider videos={bannerVideos} />
      <Box sx={{ mt: { xs: "-520px", sm: 4, md: 24} }}>
        <FutureBlock/>
      </Box>
      <Box sx={{ height: { xs: "auto", sm: "75vh" }, width: "100%", backgroundColor: "#92E2FF", py: { xs: 4, sm: 6 } }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant='h5' textAlign="center">Alpha Solutions. Delta Driven.</Typography>
          <Typography variant='h6' textAlign="center">Our Core Platforms</Typography>
        </Stack>
        <Box mt={7}>
          <CardGrid cardData={cardData} />
        </Box>
      </Box>
      <AiAndIot/>
      <WithResultsWeRise/>
      <Box mt={6} sx={{ height: { xs: "auto", sm: "300px" }, width: "90%", margin: "auto" }}>
        <Typography variant='h6' mt={3} mb={3} textAlign="center">Hello There, Investor. Or Should We Say Partner-In-Engineering Businesses Real Time?</Typography>
        <LineChart data={chartData}/>
        {/* <StockChart symbol='ORCHASP.BO' />  */}
      

      </Box>
      <Container >
        <Grid container spacing={5} marginTop={'50px'}>
          <Grid item xs={12} md={4}>
            <StockInfo />
          </Grid>
          <Grid item xs={12} md={4}>
            <AnnualReports />
          </Grid>
          <Grid item xs={12} md={4}>
            <Announcements />
          </Grid>
        </Grid>
      </Container>
      <Box mt={6} mb={4} sx={{ backgroundImage: "url(https://orchasp.com/wp-content/themes/orchasp/assets/images/about-us/Last%20Banner_N.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Stack spacing={2} alignItems="center" py={4} sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
          <Typography variant='h4' textAlign="center">Our Esteemed Clients</Typography>
          <Typography variant='h6' textAlign="center">Our clients are our partners in bringing about the big technological revolution.</Typography>

        </Stack>
        <ClientsCarousal />
      </Box>

    </Box>
  );
};

export default Home;









