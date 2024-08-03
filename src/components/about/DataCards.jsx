import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const DataCards = ({ data }) => {
    const GridAnimation=motion(Grid)
    return (
      <Grid container spacing={3}>
        {data.map((card, index) => (
          <GridAnimation item xs={12} sm={6} lg={4} key={index}
            whileHover={{scale:1.05}}
          >
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
          </GridAnimation>
        ))}
      </Grid>
    );
  };
  export default DataCards