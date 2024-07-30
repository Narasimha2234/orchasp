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

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar component="nav" sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: "none", color: "inherit" }} component={Link} to={"/"}>
          <Stack direction={"row"} spacing={2} alignItems="center">
            <Box
              component="img"
              src={img}
              alt="Logo"
              sx={{ height: 80 }}
            />
            <Typography variant="h5">ORCHASP</Typography>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'flex-end' }}>
          <Stack direction="row" spacing={3} sx={{ mt: 1 }}>
            <Button variant='text' color='inherit' component={Link} to={"/media"} sx={{ border: isCurrentPage("/media") ? '1px solid' : 'none' }}>
              <Typography variant='subtitle2' fontSize={"0.875rem"}>Media</Typography>
            </Button>
            <Button variant='text' color='inherit' component={Link} to={"/careers"}  sx={{ border: isCurrentPage("/careers") ? '1px solid' : 'none' }}>
              <Typography variant='subtitle2' fontSize={"0.875rem"}>Careers</Typography>
            </Button>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mb={1}>
            <Button
              color='inherit'
              component={Link}
              to={"/"}
              sx={{ border: isCurrentPage("/") ? '1px solid' : 'none' }}
            >
              home
            </Button>
            <Button
              color='inherit'
              component={Link}
              to={"/about"}
              sx={{ border: isCurrentPage("/about") ? '1px solid' : 'none' }}
            >
              about Us
            </Button>
            <Button
              color='inherit'
              component={Link}
              to={"/investors"}
              sx={{ border: isCurrentPage("/investors") ? '1px solid' : 'none' }}
            >
              Investors
            </Button>
            <Button
              color='inherit'
              component={Link}
              to={"/industries"}
              sx={{ border: isCurrentPage("/industries") ? '1px solid' : 'none' }}
            >
              Industries
            </Button>
            <Button
              color='inherit'
              component={Link}
              to={"/services"}
              sx={{ border: isCurrentPage("/services") ? '1px solid' : 'none' }}
            >
              services
            </Button>
            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Button
                color='inherit'
                disableElevation={true}
                aria-controls={anchorEl ? 'platform-menu' : undefined}
                aria-haspopup="true"
             
              >
                Platform<ArrowDropDownIcon />
              </Button>
              <Menu
                id="platform-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                MenuListProps={{
                  'aria-labelledby': 'platform-button',
                  onMouseLeave: handleMouseLeave
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
            <Button
              color='inherit'
              component={Link}
              to={"/knowledge"}
              sx={{ border: isCurrentPage("/knowledge") ? '1px solid' : 'none' }}
            >
              Knowledge Hub
            </Button>
            <Button component={Link} to="/letsSpeack"
              color='inherit'
              sx={{ border: isCurrentPage("/letsSpeack") ? '1px solid' : 'none' }}
            >
              let's Speak
            </Button>
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
