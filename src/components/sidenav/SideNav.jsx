import * as React from 'react';
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
import {  IconButton, Stack, Typography } from '@mui/material';

const SideNav = ({show,handleShow}) => {
  return (
   <div >
     <Drawer open={show} onClose={handleShow} anchor='right'>
        <Box sx={{ width: 230 ,}} role="presentation" onClick={handleShow} >
          <List>

            <ListItem component={Link} to={"/"}>
            <ListItemButton>     
                <ListItemText primary="Orchasp" 
                    primaryTypographyProps={{fontWeight:"bold",fontSize:"1.5rem",color:"inherit"}}/>
                 </ListItemButton>
            </ListItem>
            <ListItem  component={Link} to={"/about"}>
                <ListItemButton>
                  <ListItemText  primary={"About Us"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/investors"}>
                <ListItemButton>                
                  <ListItemText  primary={"Investors"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/industries"}>
                <ListItemButton>                
                  <ListItemText   primary={"Industries"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/services"}>
                <ListItemButton>
                  <ListItemText  primary={"Services"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/platform"}>
                <ListItemButton>                 
                  <ListItemText  primary={"Platforms"} />
                </ListItemButton>
              </ListItem>
              
              <ListItem  component={Link} to={"/knowledge"}>
                <ListItemButton>
                  <ListItemText  primary={"Knowledge Hub"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/careers"}>
                <ListItemButton>                 
                  <ListItemText  primary={"Careers"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/media"}>
                <ListItemButton>
                  <ListItemText  primary={"Media"} />
                </ListItemButton>
              </ListItem>
              <ListItem  component={Link} to={"/letsspeak"}>
                <ListItemButton>
                  <ListItemText  primary={"Let's Speak"} />
                </ListItemButton>
              </ListItem>
              
              
              
              <Box mt={6} ml={1}>
                <Typography variant='h6'>Socail Media</Typography>
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

export default SideNav