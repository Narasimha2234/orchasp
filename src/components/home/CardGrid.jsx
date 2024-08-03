import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

 const CardGrid = ({ cardData }) => {
    const AnimatedCard=motion(Card)
    return (
      <Box sx={{ width: '90%', margin: "auto", backgroundColor: '#92E2FF' }} >
        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <AnimatedCard sx={{ width: '100%', backgroundColor: 'transparent', boxShadow: 'none' }}
                 whileHover={{
                  scale:1.05,
                  color:"darkblue"
                }}
              >
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
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  export default CardGrid