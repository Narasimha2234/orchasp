import React from "react";
import { Box, Typography, Container, Grid, Stack, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const hoverVariant = {
    visible: {
      x: 10,
      color: "blue",
      transition: {
        type: "spring",
        stiffness: 150,
        duration: 0.4,
      },
    },
  };

  const TypoAnimation = motion(Typography);

  return (
    <Box
      component="footer"
      sx={{
        height: { xs: 'auto', md: '20vh' },
        backgroundImage: "url(https://orchasp.com/wp-content/themes/orchasp/assets/images/about-us/Last%20Banner_N.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 3, md: 6 },
        px: { xs: 2, sm: 3 },
        width: "90%",
      }} 
    >
      <Divider variant="middle" sx={{ border: "2px solid skyblue" }} />
      <Container maxWidth="lg" sx={{ mt: 2, ml: { xs: 0, sm: 10 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={3} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Orchasp Limited
            </Typography>
            <Typography variant="body2" gutterBottom>
              CIN: L72200TG1994PLC017485
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Copyright 2022
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Stack spacing={0.5}>
              <Typography variant="body2" color="textSecondary">
                19 & 20, Moti Valley,
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Trimulgherry, Secunderabad - 500 015,
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Telangana, INDIA.
              </Typography>
              <Typography variant="body2" color="black">
                E: info@orchasp.com
              </Typography>
              <Typography variant="body2" color="black">
                Tel: +91-40-4776 6123 / 124
              </Typography>
              <Typography variant="body2" color="black">
                Fax: +91-40-4776 6143
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3} textAlign={{ xs: 'center', sm: 'left' }}>
            <Stack spacing={0.5}>
              <TypoAnimation
                variants={hoverVariant}
                initial="initial"
                whileHover="visible"
                sx={{ textDecoration: "none" }}
                component={Link}
                to={"/contactus"}
                variant="body2"
                color="textSecondary"
              >
                Contact Us
              </TypoAnimation>
              <TypoAnimation
                variants={hoverVariant}
                initial="initial"
                whileHover="visible"
                sx={{ textDecoration: "none" }}
                component={Link}
                to={"/careers"}
                variant="body2"
                color="textSecondary"
              >
                Careers
              </TypoAnimation>
              <TypoAnimation
                variants={hoverVariant}
                initial="initial"
                whileHover="visible"
                sx={{ textDecoration: "none" }}
                component={Link}
                to={"/industries"}
                variant="body2"
                color="textSecondary"
              >
                Industries
              </TypoAnimation>
              <TypoAnimation
                variants={hoverVariant}
                initial="initial"
                whileHover="visible"
                sx={{ textDecoration: "none" }}
                component={Link}
                to={"/patner_with_us"}
                variant="body2"
                color="textSecondary"
              >
                Partner With Us
              </TypoAnimation>
            </Stack>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", width: { xs: 'auto', sm: '200px' }, mt: { xs: 2, sm: 3 } }}
            >
              Social Media
            </Typography>
            <Stack direction={"row"} justifyContent={{ xs: 'center', sm: 'flex-start' }} spacing={1}>
              <IconButton
                sx={{ "&:hover": { color: "blue" } }}
                href="https://www.facebook.com/OrchaspLimited/"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{ "&:hover": { color: "blue" } }}
                href="https://x.com/i/flow/login?redirect_after_login=%2Forchasp"
                target="_blank"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{ "&:hover": { color: "blue" } }}
                href="https://www.linkedin.com/company/orchasp-limited/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          

          <Grid item xs={12} sm={3} textAlign={{ xs: 'center', sm: 'left' }}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Legal
            </Typography>
            <Stack spacing={0.5}>
              <TypoAnimation 
                variants={hoverVariant}
                initial="initial"
                whileHover="visible"
                component={Link}
                to={"/privacypolicy"}
                color="textSecondary"
                sx={{ textDecoration: "none" }}
                variant="body2"
              >
                Privacy Policy
              </TypoAnimation>
              <TypoAnimation
                variants={hoverVariant}
                initial="initial"
                whileHover="visible"
                component={Link}
                to={"/termsofuse"}
                color="textSecondary"
                sx={{ textDecoration: "none" }}
                variant="body2"
              >
                Terms of use
              </TypoAnimation>
              <TypoAnimation
                variants={hoverVariant}
                initial="initial"
                whileHover="visible"
                component={Link}
                to={"/disclaimer"}
                color="textSecondary"
                sx={{ textDecoration: "none" }}
                variant="body2"
              >
                Disclaimer
              </TypoAnimation>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
