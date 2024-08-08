import {  Box, Container,  Grid, Typography } from '@mui/material'
import React from 'react'
import LineChart from '../charts/LineChart'
import { chartData } from '../home/data'

import AnnualReportsCarousal from './AnnualReportsCarousal';
import { corporate_governance, notices, quarterlyResults, shareHoldingPattern } from './investorsData';
import ResultsAndShareHoldPattern from './Results_and_ShareHold_Pattern';
import InvestorsInformation from './InvestorsInformation';
import Announcements from './../home/Announcements';
import StockInfo from './../home/StockInfo';
import InvestorGrievance from './InvestorGrievance';
import CommittesAndPolices from './CommittesAndPolices';
import AnnualReports from './AnnualReports';





const Investors = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "70vh",
          width: "100%",
          backgroundImage: "url(https://orchasp.com/wp-content/uploads/2021/08/investors-banner-scaled.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }} mb={10}
      >
        <Typography variant='h5' sx={{
          textAlign: "end",
          paddingRight: "100px",
          paddingTop: "150px",
          fontSize: "28px",
          fontStyle: "bold",
          color:"black",
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
          Hello There, Investor. Or Should We Say Partner-In- Engineering Businesses Real Time?
        </Typography>
      </Box>
      <Box mt={10} mb={2} sx={{ height: { xs: "auto", sm: "300px" }, width: "90%", margin: "auto" }}>
        <LineChart data={chartData} />
      </Box>
      <Box mb={15}>
        <Container >
          <Grid container spacing={5} marginTop={'20px'}>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>Corporate Presentation</Typography>
              <AnnualReports />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>Announcement</Typography>
              <Announcements />

            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom> Stock</Typography>
              <StockInfo />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ width: "80%", margin: "auto" }}>
        <Typography variant='h5' ml={2}>Annual Reports</Typography>
        <AnnualReportsCarousal />
      </Box>
      <Box mt={10} mb={10}>
        <ResultsAndShareHoldPattern quarterlyResults={quarterlyResults} shareHoldingPattern={shareHoldingPattern} />
      </Box>
      <Box mb={6}>
        <InvestorGrievance/>
      </Box>
      <Box mb={6}>
        <InvestorsInformation corporate_governance={corporate_governance} notices={notices}/>
      </Box>
      <Box>
        <CommittesAndPolices/>
      </Box>
    </Box>
  )
}

export default Investors






