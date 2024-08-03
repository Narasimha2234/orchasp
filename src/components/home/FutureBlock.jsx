import { Box, Typography } from "@mui/material";
import futureVideo from "../../assets/home/Orchasp-Home-COLOUR-1.mp4"

const FutureBlock = ()=>{

    return(
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
          <Typography variant='body2' textAlign={"justify"} color={"wheate"} sx={{ mb: 4, opacity: 0.8 }} lineHeight={1.8}>
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
    }
    export default FutureBlock