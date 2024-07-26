import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import { posts, recentPosts } from './knowledgeData';
import { Link } from 'react-router-dom';

const KnowledgeHubComp = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "80vh" },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="https://orchasp.com/wp-content/uploads/2021/07/Banner-2.png"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Stack
          sx={{
            position: "absolute",
            right: { xs: "2%", md: "20%" },
            top: { xs: "20%", md: "40%" },
            textAlign: "right",
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            variant="h2"
            lineHeight="1.2"
            // sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, width: "auto" }}
          >
            Knowledge Hub
          </Typography>
        </Stack>
      </Box>
      <Stack>
        <Typography textAlign={"left"} m={4} variant="h4">
          Knowledge Hub
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Hub {...post} />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Posts
                </Typography>
                {recentPosts.map((post, index) => (
                  <Box display="flex" alignItems="center" my={2} key={index} component={Link} to={`/blog/${post.id}`} sx={{textDecoration:"none"}}>
                    <CardMedia
                      component="img"
                      sx={{ height: 70, width: 80, mr: 2 }}
                      image={post.image}
                      alt={post.title}
                    />
                    <Box>
                      <Typography variant="body1">{post.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default KnowledgeHubComp

const Hub = ({ image, title, date, description ,id}) => (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="primary" gutterBottom mt={1}>
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"justify"}>
          {description}
        </Typography>
       <Box textAlign={"center"} mt={1}> 
        <Button variant="contained" color="primary" component={Link} to={`/blog/${id}`}>
          Read More
        </Button>
        </Box>
      </CardContent>
    </Card>
  );