import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import about_video from "../../assets/about/Orchasp-About-us.mp4";
import { CardGrid } from '../home/Home';
import { executive_directors, independent_directors, leaderShip, non_executive_and_Non_independent, orchasp_additional_service, orchasp_services } from './aboutData';

const About = () => {
  return (
    <Box>
      <Box sx={{ position: 'relative', height: { xs: '50vh', md: '73vh' }, width: "100%" }}>
        <video
          src={about_video}
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: { xs: '5%', md: '7%' },
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '1rem',
            borderRadius: '4px',
            textAlign: 'right',
            width: { xs: '90%', sm: 'auto' },
            mx: { xs: 'auto', sm: 0 }
          }}
        >
          <Typography variant='h4'>
            Our Code Helps You Stay Ahead Of The Curve
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box  
          sx={{
            height: { xs: 'auto', md: '60vh' },
            width: "100%",
            backgroundImage: "url(https://orchasp.com/wp-content/themes/orchasp/assets/images/about-us/Orchasp-About-us-2-brain1.png)",
            backgroundSize: "cover",
            backgroundPosition: "cover",
            objectFit:"cover"
          }}
        > 
          <Box sx={{ width: { xs: '90%', sm: '80%', md: '60%' }, margin: 'auto', pt: 5 }}>
            <Typography variant='h4' color="primary" textAlign="center">
              "We’ve Already Thought Of It. And Integrated It.”
            </Typography>
            <Box mt={3} color="#fff" sx={{ opacity: 0.8 }} textAlign={"justify"}>
              <Typography variant='body1'>
                Since inception in 1994, we have operated with the single goal of providing the most innovative technological
                solutions to our clients and consumers.
              </Typography>
              <Typography mt={2} variant='body1' textAlign={"justify"}>
                Software solutions are not just our service, but our expertise. We add value to your business with technology 
                that fits seamlessly to your working models while being easy to upgrade and at par with international standards.
              </Typography>
              <Typography mt={2} variant='body1' textAlign={"justify"}>
                Our expertise spans development and consultancy, digital marketing, IoT smart devices, social media, mobility analytics and cloud computing. 
                We also offer platforms catering to healthcare, e-commerce, and logistics. Software solutions are not just our service,
                but our expertise. We add value to your business with technology that fits seamlessly to your working models, 
                while being easy to upgrade and at par with international standards.
              </Typography>
            </Box>
          </Box>
        </Box>     
      </Box>
      <Box sx={{ backgroundColor:"#92E2FF" }}>
        <Box sx={{ width: "65%", margin: "auto", mb: 1 }}>
          <Typography variant='h4' textAlign={"center"} color={"primary"}>Today, Orchasp’s Offerings Include Technology Services Such As</Typography>
        </Box>
        <Box sx={{ width: "90%", margin: "auto", mt: 5, display: "flex", flexWrap: "wrap" }}>
          <DataCards data={orchasp_services} />
          <Divider />
          <Box>
            <Typography gutterBottom variant='h4' textAlign={"center"} color={"primary"}>Orchasp Also Offers Products Under The Following Verticals</Typography>
            <CardGrid cardData={orchasp_additional_service} />
          </Box>
        </Box>
      </Box>
      <Box mt={5}>
        <Typography variant='h4' textAlign={"center"} color={"primary"}>Board of Directors</Typography>
        <Box mt={2}>
          <Typography variant='body1' textAlign={"center"} color={"primary"}>Executive Directors</Typography>
          <Box mt={2} ml={2}>
            <DirectorCard data={executive_directors} />
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box mt={2}>
          <Typography variant='body1' textAlign={"center"} color={"primary"}>Non – Executive,Non Independent Directors</Typography>
          <Box mt={2} ml={2}>
            <DirectorCard data={non_executive_and_Non_independent} />
          </Box>
        </Box>
        <Divider variant="middle" />
        <Box mt={2}>
          <Typography variant='body1' textAlign={"center"} color={"primary"}>Independent Directors</Typography>
          <Box mt={2} ml={2}>
            <DirectorCard data={independent_directors} />
          </Box>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Box mt={5}>
        <Typography variant='h4' textAlign={"center"} color={"primary"}>Our Leadership</Typography>
        <Box mt={2}>
          <Box mt={2} ml={2}>
            <DirectorCard data={leaderShip} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

const DataCards = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((card, index) => (
        <Grid item xs={12} sm={6} lg={4} key={index}>
          <Card sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none' }}>
            <CardMedia
              component="img"
              height="250"
              width="250"
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
  );
};

const DirectorCard = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((card, index) => (
        <Grid item xs={12} sm={6} lg={4} key={index}>
          <Card sx={{ 
            position: 'relative', 
            width: '93%', 
            backgroundColor: 'transparent', 
            boxShadow: 'none',
            overflow: 'hidden'
          }}>
            <Box sx={{
              position: 'relative',
              '&:hover .card-description': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .card-image': {
                opacity: 0.3,
              }
            }}>
              <CardMedia
                component="img"
                height="400"
                image={card.img}
                alt={card.title}
                sx={{ width: '100%', objectFit: 'cover', transition: 'opacity 0.3s' }}
                className="card-image"
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  opacity: 0,
                  visibility: 'hidden',
                  transition: 'opacity 0.3s',
                  padding: '1rem',
                }}
                className="card-description"
              >
                <Typography variant="body1" textAlign={"justify"}>{card.description}</Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography variant="h6" component="div" textAlign="center" color={"primary"}>
                {card.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};