import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '../ThemeProviderComp';
import img from "../../assets/logo/ORCHASP Final Logo.png";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = (props) => {
  const { toggleTheme, mode } = useTheme();
  const { handleShow } = props;
  const theme = useMuiTheme();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };
  const Btn=motion(Button)
  const btnVarient={
    whileHover:{
      color:"blue",
      y:-10,
      transition:{
        duration:1,
        type:"spring",
        stiffness:"190"
      }
    }
  }
  return (
    <AppBar component="nav" sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: "none", color: "inherit" }} component={Link} to={"/"}>
          <Stack direction={"row"} spacing={2} alignItems="center">
            <Box
              component="img"
              src={img}
              alt="Logo"
              sx={{ height: 110 }}
            />
            <Typography variant="h5" color={"primary"} fontWeight={"bold"} fontSize={30}>Orchasp Limited</Typography>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'flex-end' }}>
          <Stack direction="row" spacing={3} sx={{ mt: 1 }}>
            <Btn  size='small' variant='text' color='inherit' component={Link} to={"/media"} sx={{ borderBottom: isCurrentPage("/media") ? '3px solid blue' : 'none',borderRadius:"0px"  }}
             variants={btnVarient}
            whileHover="whileHover"
            >
           
              Media
            </Btn>
            
            <Btn  size='small' variant='text' color='inherit' component={Link} to={"/careers"} sx={{ borderBottom: isCurrentPage("/careers") ? '3px solid blue' : 'none',borderRadius:"0px"  }}
             variants={btnVarient}
            whileHover="whileHover"
            >
              Careers
            </Btn>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mb={1}>
            <Btn
             variants={btnVarient}
            whileHover="whileHover"
              color='inherit'
              component={Link}
              to={"/"}
              sx={{ borderBottom: isCurrentPage("/") ? '3px solid blue' : 'none' ,ml:1,borderRadius:"0px" }}
              size='small'
              
            >
              home
            </Btn>
            <Btn
             variants={btnVarient}
             whileHover="whileHover"
             
              
             size='small'
              color='inherit'
              component={Link}
              to={"/about"}
              sx={{ borderBottom: isCurrentPage("/about") ? '3px solid blue' : 'none',ml:1 ,borderRadius:"0px" }}
            >
              about Us
            </Btn>
            <Btn
            variants={btnVarient}
             whileHover="whileHover"
             size='small'
              color='inherit'
              component={Link}
              to={"/investors"}
              sx={{ borderBottom: isCurrentPage("/investors") ? '3px solid blue' : 'none',ml:1 ,borderRadius:"0px" }}
            >
              Investors
            </Btn>
            
            <Btn
             variants={btnVarient}
            whileHover="whileHover"
             size='small'
              color='inherit'
              component={Link}
              to={"/industries"}
              sx={{ borderBottom: isCurrentPage("/industries") ? '3px solid blue' : 'none',ml:1 ,borderRadius:"0px" }}
            >
              Industries
            </Btn>
            <Btn
             variants={btnVarient}
            whileHover="whileHover"
              color='inherit'
               size='small'
              component={Link}
              to={"/services"}
              sx={{ borderBottom: isCurrentPage("/services") ? '3px solid blue' : 'none' ,ml:1,borderRadius:"0px" }}
            >
              services
            </Btn>
            <Box
             
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Btn
               variants={btnVarient}
                whileHover="whileHover"
                color='inherit'
                 size='small'
                disableElevation={true}
                aria-controls={anchorEl ? 'platform-menu' : undefined}
                aria-haspopup="true"
              >
                Platform<ArrowDropDownIcon />
              </Btn>
              <Menu
                id="platform-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'platform-button',
                  onMouseLeave: handleMenuClose
                }}
              >
                <MenuItem sx={{ width: "900px", backgroundColor: "white" }}>
                  <Box sx={{ height: "300px", width: "98%", display: "flex", margin: "auto", justifyContent: "space-around", backgroundColor: "white" }}>
                    <Box sx={{ width: "48%" }}>
                      <Stack spacing={4} mt={8} ml={1}>
                        <Typography component={"a"} href='https://www.induscargo.in/lander' target='_blank' sx={{ textDecoration: "none" }}>Cargo/Logistics services of small fleet operators</Typography>
                        <Typography component={"a"} href='http://www.induscrafts.in/' target='_blank' sx={{ textDecoration: "none" }}>Arts & Crafts ecommerce of niche arts and crafts</Typography>
                        <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none" }}>Retail ecommerce aggregation of unorganised retail</Typography>
                        <Typography component={"a"} href='http://www.induskare.in/' target='_blank' sx={{ textDecoration: "none" }}>Healthcare aggregation of health emergency services</Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ width: "48%", textDecoration: "none" }}>
                      <Stack spacing={4} mt={8} ml={1}>
                        <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none" }}>ELearning aggregation of informal learning</Typography>
                        <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none" }}>B2B Marketplace aggregation of b2b goods and services</Typography>
                        <Typography component={"a"} href='https://www.indusayush.in/' target='_blank' sx={{ textDecoration: "none" }}>electronic health records repository</Typography>
                        <Typography component={"a"} href='about:blank' target='_blank' sx={{ textDecoration: "none" }}>content management</Typography>
                      </Stack>
                    </Box>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
            <Btn
             variants={btnVarient}
            whileHover="whileHover"
              color='inherit'
               size='small'
              component={Link}
              to={"/knowledge"}
              sx={{ borderBottom: isCurrentPage("/knowledge") ? '3px solid blue' : 'none' ,ml:1,borderRadius:"0px" }}
            >
              Knowledge Hub
            </Btn>
            <Btn component={Link} to="/letsSpeack"
             variants={btnVarient}
            whileHover="whileHover"
              color='inherit'
               size='small'
              sx={{ borderBottom: isCurrentPage("/letsSpeack") ? '3px solid blue' : 'none',ml:1,borderRadius:"0px" }}
            >
              let's Speak
            </Btn>
          </Box>
        </Box>
        <IconButton color='inherit' onClick={handleShow} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <IconButton
          color='inherit'
          edge="end"
          sx={{ ml: 2 }}
          size='large'
          onClick={toggleTheme}
        >
          {mode === "light" ? <Brightness5Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
