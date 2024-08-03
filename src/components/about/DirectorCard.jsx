import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

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
    export default DirectorCard  