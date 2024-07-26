import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { bannerVideos, withResultsData, cardData, statsData, chartData } from './data';
import futureVideo from "../../assets/home/Orchasp-Home-COLOUR-1.mp4"
import HomeVideoSlider from '../sliders/HomeVideoSlider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LineChart from '../charts/LineChart';
import { styled, useTheme as useMuiTheme } from '@mui/material/styles';
import ClientsCarousal from '../home/ClientsCarousal';

const InfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  borderRadius: theme.shape.borderRadius,
  height: "100%",
}));

const Home = () => {
  const theme = useMuiTheme();
  return (
    <Box sx={{ width: "100%" }}>
    <HomeVideoSlider videos={bannerVideos} />
    <Box sx={{ mt: { xs: "-520px", sm: 4, md: 27 } }}>
      {futureBlock}
    </Box>
    <Box sx={{ height: { xs: "auto", sm: "75vh" }, width: "100%", backgroundColor: "#92E2FF", py: { xs: 4, sm: 6 } }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant='h5' textAlign="center">Alpha Solutions. Delta Driven.</Typography>
        <Typography variant='h6' textAlign="center">Our Core Platforms</Typography>
      </Stack>
      <Box mt={7}>
        <CardGrid cardData={cardData}/>
      </Box>
    </Box>
    {ai_iot}
    {WithResultsWeRise}
    <Box mt={6} mb={2} sx={{ height: { xs: "auto", sm: "300px" }, width: "90%", margin: "auto" }}>
      <Typography variant='h6' mt={3} mb={3} textAlign="center">Hello There, Investor. Or Should We Say Partner-In-Engineering Businesses Real Time?</Typography>
      <LineChart data={chartData} />
    </Box>
    <Container >
          <Grid container spacing={5} marginTop={'20px'}>
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
    <Box mt={6} sx={{backgroundImage: "url(https://orchasp.com/wp-content/themes/orchasp/assets/images/about-us/Last%20Banner_N.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <Stack spacing={2} alignItems="center" py={4} sx={{backgroundColor: theme.palette.background.default, color: theme.palette.text.primary}}>
        <Typography variant='h4' textAlign="center">Our Esteemed Clients</Typography>
        <Typography variant='h6' textAlign="center">Our clients are our partners in bringing about the big technological revolution.</Typography>
       
      </Stack>
    </Box>
    <ClientsCarousal/>
  </Box>
  );
};

export default Home;

const futureBlock = (
  <Box
  sx={{
    position: 'relative',
    height: { xs: '60vh', sm: '70vh', md: '80vh' }, 
    mt: 2,
    overflow: 'hidden'
  }}
>
  <video
    src={futureVideo}
    autoPlay
    loop
    muted
    style={{
      width: '100%',
      height: '100%', 
      objectFit: 'cover'
    }}
  />
  <Box
    sx={{
      position: 'absolute',
      width: { xs: '90%', sm: '80%', md: '50%' }, 
      textAlign: 'center',
      bottom: { xs: '5%', sm: '10%', md: '10%' }, 
      left: { xs: '5%', sm: '10%', md: '25%' }, 
      padding: 2,
      color: 'white',
    }}
  >
    <Typography variant='h4' color={"white"} sx={{ mb: 2 }}>
      The Future Of Digital Transformation
    </Typography>
    <Typography variant='h5' color={"white"} sx={{ mb: 2 }}>
      About Us
    </Typography>
    <Typography variant='body2' textAlign={"justify"} color={"wheate"} sx={{ mb: 4 , opacity:0.8}} lineHeight={1.8}>
      Since inception in 1994, we have operated with the single goal of providing the most innovative technological solutions to our clients and consumers. 
      Software solutions are not just our service, but our expertise. 
      We add value to your business with technology that fits seamlessly to your working models, 
      while being easy to upgrade and at par with international standards. Our expertise spans development and consultancy, 
      digital marketing, IOT smart devices, social media, mobility analytics and cloud computing. 
      We also offer platforms catering to healthcare, e-commerce, and logistics.
    </Typography>
  </Box>
</Box>
);

 export const CardGrid = ({cardData})=>{
  return(
  <Box sx={{ width: '90%', margin: "auto", backgroundColor: '#92E2FF' }} >
    <Grid container spacing={3}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <Card sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none' }} >
            <CardMedia
              component="img"
              height="300"
              width="300"
              image={card.image}
              alt={card.title}
              sx={{ objectFit: 'contain' }}
            />
            <CardContent>
              <Typography variant="h6" component="div" textAlign="center">
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
}

const WithResultsWeRise = (
  <Box sx={{ width: '90%', height: "65vh", margin: "auto", borderBottom: "1px solid", overflowX: "hidden" ,marginTop:"20px"}}>
      <Box sx={{ textAlign: "center", marginBottom: 5 }}>
        <Typography variant='h4' color="primary">With Results, We Rise.</Typography>
        <Typography variant='h6' mt={2} mx={{ xs: 2, sm: 9 }}>
          Our solutions don’t just help consumers or businesses, they help bring about change and make an impact. 
          But don’t just take our word for it, check out our case studies.
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {withResultsData.map((each, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}
            sx={{
              animation: 'slideUp 5s ease',
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards',
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <Box sx={{
              border: "2px solid lightblue",
              height: "220px",
              width: { xs: "100%", sm: "280px" }, 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 1 
            }}>
              <Box component="img" src={each.image} sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            </Box>
            <Typography fontSize={18} color="lightblue" textAlign="center">
              {each.tittle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
);

const ai_iot = (
  <Box sx={{ backgroundColor: "#0747a6", overflowX: "hidden" }} >
      <Container margin={"20px"} sx={{ backgroundColor: "#0747a6" }}>
        <Grid container spacing={2}>
          {/* First Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Adjusts layout based on screen size
                alignItems: "center",
                padding: 2,
                backgroundColor: "#0747a6",
              }}
            >
              <Grid item xs={12} sm={6}>
                <img
                  src={"https://orchasp.com/wp-content/uploads/2021/07/09-Object-1.png"}
                  alt="Application Development"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ marginLeft: { sm: 7 }, textAlign: { xs: "center", sm: "left" } }}>
                  <Typography
                    color={"#0bb7e5"}
                    variant="h5"
                    component="h2"
                    fontSize={"24px"}
                  >
                    How Artificial Intelligence helps in structuring data
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      marginTop: 1,
                      textAlign: "justify",
                      fontSize: "17px",
                      fontWeight: "200",
                      color: "#ffff",
                    }}
                  >
                    The Internet provides masses of information that was
                    impossible to obtain just a few years ago. The growing use of
                    smartphones, Internet of Things (IoT) devices and customer
                    relationship management (CRM) systems, as well as data
                    gathered from online shopping behavior, social media profiles
                    and activity, such as likes and dislikes, product
                    reviews, tagged and shared content, have together resulted in a
                    truly vast data universe in the digital space today.
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>

         
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, 
                alignItems: "center",
                padding: 2,
                backgroundColor: "#0747a6",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  color={"#0bb7e5"}
                  variant="h5"
                  component="h2"
                  textAlign={"justify"}
                  fontSize={"24px"}
                >
                  IoT devices provide invaluable assistance to the healthcare
                  industry
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    marginTop: 1,
                    textAlign: "justify",
                    fontSize: "17px",
                    color: "#ffff",
                  }}
                >
                  IoT devices are playing an important role in another important
                  aspect of this pandemic – Contact tracing. Wearable Iimport ClientsCarousal from './ClientsCarousal';
oT
                  devices like smartwatches and Real-time location systems such
                  as Radio Frequency Identification (RFID) bracelets enable
                  healthcare workers to keep a track of infected patients and
                  their contacts and also monitor quarantine and recuperation
                  periods of these people. Using artificial intelligence (AI)
                  and Big Data, the information collected is analyzed.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src={"https://orchasp.com/wp-content/uploads/2021/07/09-Object-2.png"}
                  alt="Cloud Enablement"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Divider color={"white"} />

      <Box sx={{ backgroundColor: "#0747a6", padding: 1 }}>
       
          <Grid
            mt={7}
            container
            spacing={2}
            display={"flex"}
            alignItems="center"
            justifyContent="flex-start"
            // border={"2px solid red"}
            width={"100%"}
          >
            <Grid container spacing={2} alignItems="center">
  {statsData.map((stat, index) => (
    <React.Fragment key={index}>
      <Grid item xs={12} md={3} lg={3} sx={{ textAlign: "center" }}>
        <Typography variant="h2" color="#0bb7e5">
          {stat.number}
        </Typography>
        <Typography variant="body1" color="#0bb7e5">
          {stat.label}
        </Typography>
      </Grid>
      {index < statsData.length - 1 && (
        <Grid item xs={false} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Divider orientation="vertical" flexItem sx={{ borderColor: "white", height: '100px' }} />
        </Grid>
      )}
    </React.Fragment>
  ))}
</Grid>
          </Grid>
       
      </Box>
    </Box>
);

const StockInfo = () => (
  <InfoBox>
    <Accordion defaultExpanded >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">ORCHASP LIMITED</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container  spacing={4}>
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

const AnnualReports = () => (
  <InfoBox>
    <Typography variant="h6" gutterBottom>
      Annual Reports
    </Typography>
    <img
      src={"https://orchasp.com/wp-content/themes/orchasp/assets/images/homepage/anual-report-new.jpg "} 
      alt="Annual Report"
      style={{ width: "100%", height: "auto" }}
    />
    <Typography variant="body2" align="center">
      2020-2021
    </Typography>
  </InfoBox>
);

const Announcements = () => (
  <InfoBox>
    <Typography padding={2} mt={1} textAlign={"left"} variant="h6" gutterBottom>
      Announcements
    </Typography>
    <Typography padding={2} mt={5}  textAlign={"left"} variant="h6">
      Unaudited quarterly results within 45 days from the end of the quarter
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography padding={2} mt={5}  textAlign={"left"} variant="h6">
      Audited results within 60 days from the end of the quarter
    </Typography>
  </InfoBox>
);