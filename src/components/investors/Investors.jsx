import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Grid, ListItem, ListItemText, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import LineChart from '../charts/LineChart'
import { chartData } from '../home/data'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AnnualReportsCarousal from './AnnualReportsCarousal';
import { corporate_governance, notices, quarterlyResults, shareHoldingPattern } from './investorsData';
import ResultsAndShareHoldPattern from './Results_and_ShareHold_Pattern';
import InvestorsInformation from './InvestorsInformation';



const InfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  borderRadius: theme.shape.borderRadius,
  height: "100%",
}));

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
          paddingRight: "20px",
          paddingTop: "300px",
          fontSize: "30px",
          fontStyle: "bold",
          color:"white"
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
        <AnnualReportsCarousal />
      </Box>
      <Box mt={10} mb={10}>
        <ResultsAndShareHoldPattern quarterlyResults={quarterlyResults} shareHoldingPattern={shareHoldingPattern} />
      </Box>
      <Box mb={6}>
        {investor_grievance}
      </Box>
      <Box mb={6}>
        <InvestorsInformation corporate_governance={corporate_governance} notices={notices}/>
      </Box>
      <Box>{committes_and_polices}</Box>
    </Box>
  )
}

export default Investors

const AnnualReports = () => (
  <InfoBox >

   <Box component={"a"} href='https://orchasp.com/wp-content/uploads/2021/08/Orchasp-2021.pdf' target='_blank'>
   <img
      src={"https://orchasp.com/wp-content/uploads/2021/08/Corporate-Presentation.jpg"}
      alt="Corporate Presentation"
      
      style={{ width: "100%", height: "auto", marginTop: 10 }}
    />
   </Box>
  </InfoBox>
);

const Announcements = () => (
  <InfoBox>
    <Typography padding={2} mt={2} textAlign={"left"} variant="h6">
      Unaudited quarterly results within 45 days from the end of the quarter
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography padding={2} mt={5} textAlign={"left"} variant="h6">
      Audited results within 60 days from the end of the quarter
    </Typography>
  </InfoBox>
);

const StockInfo = () => (
  <InfoBox>
    <Accordion defaultExpanded >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">ORCHASP LIMITED</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              Symbol
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2">
              ORCHASP.BO
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              Price
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2" fontWeight="bold">
              ₹3.37
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              Change
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2">
              0.16
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              % Change
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2">
              4.98%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              Volume
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2">
              ₹964.65K
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              52 week range
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2">
              3.20 - 3.37
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              Shares outstanding
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2">
              -
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"left"} variant="body2">
              Market cap
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign={"right"} variant="body2">
              -
            </Typography>
          </Grid>

        </Grid>
      </AccordionDetails>
    </Accordion>

  </InfoBox>

);


const investor_grievance = (
  <Box sx={{ width: "85%", margin: "auto" }}>
    <Typography variant='h4' textAlign={"center"}>Investor Grievance</Typography>
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant='h5'>Registrar & Share Transfer Agents</Typography>
          <Stack direction="row" spacing={1} mt={3}>
            <Box component="img" src='https://orchasp.com/wp-content/uploads/2021/08/Aarthi-Logo.png' height={50} width={50} />
            <Stack spacing={1}>
              <Typography>Aarathi Consultants Pvt. Ltd.</Typography>
              <Typography>#1-2-285, Domalguda, Hyderabad – 500 029, INDIA.</Typography>
              <Typography>Tel : +91-40-27638111 / 4445, 55611921,</Typography>
              <Typography>Fax: +91-40-27632184</Typography>
              <Typography>E-mail: info@aarthiconsultants.com</Typography>
              <Typography>web-site: www.aarthiconsultants.com</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h5'>Shareholder Grievance Redressal</Typography>
          <Stack spacing={1} mt={3}>
            <Typography>Ms. Sangeeta Mundhra</Typography>
            <Typography>Company Secretary and Compliance officer</Typography>
            <Typography>Orchasp Limited</Typography>
            <Typography>19 & 20, Moti Valley, Trimulgherry</Typography>
            <Typography>Secunderabad – 500015, Telangana, INDIA.</Typography>
            <Typography>Tel: +91-40-4776 6123/6124</Typography>
            <Typography>E-mail: secretarial@orchasp.com</Typography>
            <Typography>Website: www.orchasp.com</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Box>
)

const committes_and_polices = (
  <Box sx={{ width: "85%", margin: "auto", padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRight: { md: "1px solid", xs: "none" }, pr: { md: 2, xs: 0 }, pb: { xs: 2, md: 0 } }}>
            <Typography variant='h5'>Committees</Typography>
            <Stack spacing={1} mt={5}>
              <Typography variant='h6'>Audit Committee</Typography>
              <Typography variant='body1' pl={2} component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Audit-Committee-Charter.pdf' target='_blank' sx={{ textDecoration: "none" }}>• Committee Charter</Typography>
              <Typography variant='h6'>Nomination & Remuneration Committee</Typography>
              <Typography variant='body1' pl={2} component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/NominationRemunerationCommitteeCharter.pdf' target='_blank' sx={{ textDecoration: "none" }}>• Committee Charter</Typography>
              <Typography variant='h6'>Stakeholder Committee</Typography>
              <Typography variant='body1' pl={2} component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Stakeholders-Relation-Commitee-Charter.pdf' target='_blank' sx={{ textDecoration: "none" }}>• Committee Charter</Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: { md: 10, xs: 0 } }}>
            <Typography variant='h5'>Shareholder Grievance Redressal</Typography>
            <Stack spacing={1} mt={5}>
              <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Commitee-Composition.pdf'>• Committee Composition</ListItem>
              <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Corporate-Governance.pdf'>• Corporate Governance Guidelines</ListItem>
              <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/DraftAppointmentlettertoIndpendentDirectors.pdf'>• Draft Appointmentletter to Indpendent Directors</ListItem>
              <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Nomination-and-Remuneration-Policy-.pdf'>• Nomination & Remuneration Policy</ListItem>
              <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Whistle-Blower-Policy-.pdf'>• Whistle Blower Policy</ListItem>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
)