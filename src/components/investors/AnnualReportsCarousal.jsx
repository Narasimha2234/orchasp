import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { carousalData } from './investorsData';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 1 
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const AnnualReportsCarousal = () => {
  return (
    <Carousel 
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}     
      customTransition="transform 0.5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {carousalData.map(item => (
        <Box key={item.id} sx={{ padding: 2, textAlign: 'center' ,textDecoration:"none"}}
            component={"a"} href={item.path}
            mb={5}
        >
          <Card elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2 ,border:"none",backgroundColor:"transparent", margin:"0 10px" }}>
            <CardHeader title={item.header} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardMedia 
                component="img"
                image={item.img}
                alt="logo"
                sx={{ width: 200, height: 300, objectFit: "contain" }}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography>{item.date}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Carousel>
  );
};

export default AnnualReportsCarousal;
