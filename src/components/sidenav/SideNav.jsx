import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { IconButton, Stack, Typography, Menu, MenuItem } from '@mui/material';

const SideNav = ({ show, handleShow }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleKnowledgeHubClick = (event) => {
    event.stopPropagation(); // Prevent Drawer from closing
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Drawer open={show} onClose={handleShow} anchor='right'>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleShow}>
          <List >
            <ListItem component={Link} to={"/"}>
              <ListItemButton>
                <ListItemText primary="Orchasp"
                  primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.5rem", color: "inherit" }} />
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to={"/about"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"About Us"} />
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to={"/investors"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"Investors"} />
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to={"/industries"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"Industries"} />
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to={"/services"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"Services"} />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={handleKnowledgeHubClick}>
              <ListItemButton  sx={{color:"black"}}>
                <ListItemText primary={"Platforms"} />
              </ListItemButton>
            </ListItem>

            <ListItem component={Link} to={"/knowledge"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"Knowledge Hub"} />
              </ListItemButton>
            </ListItem>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'knowledge-hub-button',
                onMouseLeave: handleClose,
              }}
              PaperProps={{
                style: {
                  width: '90%',
                  maxWidth: '300px',
                  marginTop: '50px'
                }
              }}
            >
              <MenuItem>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography component={"a"} href='https://www.induscargo.in/lander' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>Cargo/Logistics services of small fleet operators</Typography>
                  <Typography component={"a"} href='http://www.induscrafts.in/' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>Arts & Crafts ecommerce of niche arts and crafts</Typography>
                  <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>Retail ecommerce aggregation of unorganised retail</Typography>
                  <Typography component={"a"} href='http://www.induskare.in/' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>Healthcare aggregation of health emergency services</Typography>
                  <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>ELearning aggregation of informal learning</Typography>
                  <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>B2B Marketplace aggregation of b2b goods and services</Typography>
                  <Typography component={"a"} href='https://www.indusayush.in/' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>electronic health records repository</Typography>
                  <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none", padding: 1 }}>content management</Typography>
                </Box>
              </MenuItem>
            </Menu>
            <ListItem component={Link} to={"/careers"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"Careers"} />
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to={"/media"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"Media"} />
              </ListItemButton>
            </ListItem>
            <ListItem component={Link} to={"/letsSpeack"}>
              <ListItemButton sx={{color:"black"}}>
                <ListItemText primary={"Let's Speak"} />
              </ListItemButton>
            </ListItem>

            <Box mt={6} ml={1}>
              <Typography variant='h6'>Social Media</Typography>
              <Stack direction={"row"} spacing={4}>
                <IconButton sx={{ '&:hover': { color: 'blue' } }} href='https://www.facebook.com/OrchaspLimited/' target='_blank'><FacebookIcon /></IconButton>
                <IconButton sx={{ '&:hover': { color: 'blue' } }} href='https://x.com/i/flow/login?redirect_after_login=%2Forchasp' target='_blank'><TwitterIcon /></IconButton>
                <IconButton sx={{ '&:hover': { color: 'blue' } }} href='https://www.linkedin.com/company/orchasp-limited/' target='_blank'><LinkedInIcon /></IconButton>
              </Stack>
            </Box>
          </List>
        </Box>
      </Drawer>
    </div>
  )
}

export default SideNav;
