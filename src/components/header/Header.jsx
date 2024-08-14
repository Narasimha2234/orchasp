import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTheme as useMuiTheme } from '@mui/material/styles';

import img from "../../assets/logo/ORCHASP Final Logo.png";
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const Header = (props) => {
 
  const { handleShow } = props;
  const theme = useMuiTheme();
  const location = useLocation();

  const [showPlatformMenu, setShowPlatformMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const handlePlatformEnter = () => {
    setShowPlatformMenu(true);
  };

  const handlePlatformLeave = () => {
    setShowPlatformMenu(false);
    setSubMenu(null);
  };

  const handleSubMenuEnter = (menu) => {
    setSubMenu(menu);
  };

  const handleSubMenuLeave = () => {
    setSubMenu(null);
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  const Btn = motion(Button);
  const btnVariant = {
    whileHover: {
      color: "blue",
      y: -10,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 190,
      },
    },
  };

  const renderSubMenuLinks = (menu) => {
    const links = {
      logistics: [
        { name: 'Cargo/Logistics services of small fleet operators', url: 'https://www.induscargo.in/lander' },
       
      ],
      eCommerce: [
        { name: 'Arts & Crafts ecommerce of niche arts and crafts', url: 'http://www.induscrafts.in/' },
        {name:"Retail ecommerce aggregation of unorganised retail",url:"https://www.indusretail.in/lander"},
        {name:"B2B Marketplace aggregation of b2b goods and services",url:"https://www.indusnetworx.in/lander"}
        
      ],
      healthCare: [
        { name: 'electronic health records repository', url: 'https://www.indusayush.in/' },
        {name:"Retail ecommerce aggregation of unorganised retail",url:"https://www.indusretail.in/lander"}
       
      ],
      education: [
        { name: 'ELearning aggregation of informal learning', url: 'https://www.indusmaster.in/lander' },
       
      ],
      publication: [
        { name: 'content management', url: 'https://www.indusmatter.in/lander' },
       
      ]
    };
    return (
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: '180px',
        width: '240px',
        backgroundColor: 'white',
        zIndex: 2,
        boxShadow: theme.shadows[3],
        borderRadius: 3,
       p:1
      }}>
        <Stack spacing={2}>
          {links[menu]?.map((link, index) => (
            <Typography key={index} component="a" href={link.url} target="_blank"
             sx={{ 
               textDecoration: 'none', 
               color: 'inherit' ,
               p:1,
               "&:hover":{
                backgroundColor:"whitesmoke",
                borderRadius:3
               }
               }}>
              {link.name}
            </Typography>
          ))}
        </Stack>
      </Box>
    );
  };

  const platformStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    borderRadius:3
    
  };

  return (
    <AppBar component="nav" sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: "none", color: "inherit" }} component={Link} to={"/"}>
          <Stack direction={"row"} spacing={2} alignItems="center">
            <Box component="img" src={img} alt="Logo" sx={{ height: 110 }} />
            <Typography variant="h5" color={"primary"} fontWeight={"bold"} fontSize={{md:30 ,sx:20}}>Orchasp Limited</Typography>
          </Stack>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'flex-end' }}>
          <Stack direction="row" spacing={3} sx={{ mt: 1 }}>
            <Btn size='small' variant='text' color='inherit' component={Link} to={"/media"} sx={{ borderBottom: isCurrentPage("/media") ? '3px solid blue' : 'none', borderRadius: "0px", "&:hover":{
                    color:"blue"
                  } }}
             
            > 
              Media
            </Btn>
            <Btn size='small' variant='text' color='inherit' component={Link} to={"/careers"} sx={{ borderBottom: isCurrentPage("/careers") ? '3px solid blue' : 'none', borderRadius: "0px","&:hover":{
                    color:"blue"
                  } }}
            
            >
             
              Careers
            </Btn>
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mb={1}>
            <Btn
              
              color='inherit'
              component={Link}
              to={"/"}
              sx={{ borderBottom: isCurrentPage("/") ? '3px solid blue' : 'none', ml: 1, borderRadius: "0px","&:hover":{
                    color:"blue"
                  } }}
              size='small'
            > 
              Home
            </Btn>
            <Btn
             
              size='small'
              color='inherit'
              component={Link}
              to={"/about"}
              sx={{ borderBottom: isCurrentPage("/about") ? '3px solid blue' : 'none', ml: 1, borderRadius: "0px","&:hover":{
                    color:"blue"
                  } }}
            > 
              About Us
            </Btn>
            <Btn
             
              size='small'
              color='inherit'
              component={Link}
              to={"/investors"}
              sx={{ borderBottom: isCurrentPage("/investors") ? '3px solid blue' : 'none', ml: 1, borderRadius: "0px","&:hover":{
                    color:"blue"
                  } }}
            > 
              Investors
            </Btn>
            <Btn
              
              size='small'
              color='inherit'
              component={Link}
              to={"/industries"}
              sx={{ borderBottom: isCurrentPage("/industries") ? '3px solid blue' : 'none', ml: 1, borderRadius: "0px" ,"&:hover":{
                    color:"blue"
                  }}}
            > 
              Industries
            </Btn>
            <Btn
             
              color='inherit'
              size='small'
              component={Link}
              to={"/services"}
              sx={{ borderBottom: isCurrentPage("/services") ? '3px solid blue' : 'none', ml: 1, borderRadius: "0px" ,"&:hover":{
                    color:"blue"
                  }}}
            > 
              Services
            </Btn>
            <Box onMouseEnter={handlePlatformEnter} onMouseLeave={handlePlatformLeave} sx={{ position: 'relative' }}>
              <Btn
                
                color='inherit'
                size='small'
                disableElevation={true}
                sx={{
                  "&:hover":{
                    color:"blue"
                  }
                }}
              > 
                Platform<ArrowDropDownIcon />
              </Btn>
              {showPlatformMenu && (
                <Box 
                  sx={{
                    position: 'absolute',
                    top: 30,
                    right: 0,
                    width: '180px',
                    backgroundColor: 'white',
                    zIndex: 1,
                    boxShadow: theme.shadows[3],
                    borderRadius: 3,
                    
                  }}
                >
                  <Stack spacing={2} pt={1}>
                    <Typography bgcolor={`${subMenu==="logistics" ?"whitesmoke":""}`} pl={2}  sx={platformStyle} onMouseEnter={() => handleSubMenuEnter('logistics')} onMouseLeave={handleSubMenuLeave}>
                      Logistics
                      <IconButton>
                        <KeyboardArrowRightIcon  />
                      </IconButton>
                      {subMenu === 'logistics' && renderSubMenuLinks('logistics')}
                    </Typography>
                    <Typography bgcolor={`${subMenu==="eCommerce" ?"whitesmoke":""}`}  pl={2}  sx={platformStyle} onMouseEnter={() => handleSubMenuEnter('eCommerce')} onMouseLeave={handleSubMenuLeave}>
                      e-Commerce
                      <IconButton>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                      {subMenu === 'eCommerce' && renderSubMenuLinks('eCommerce')}
                    </Typography>
                    <Typography bgcolor={`${subMenu==="healthCare" ?"whitesmoke":""}`}  pl={2}  sx={platformStyle} onMouseEnter={() => handleSubMenuEnter('healthCare')} onMouseLeave={handleSubMenuLeave}>
                      Health Care
                      <IconButton>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                      {subMenu === 'healthCare' && renderSubMenuLinks('healthCare')}
                    </Typography>
                    <Typography bgcolor={`${subMenu==="education" ?"whitesmoke":""}`}  pl={2}  sx={platformStyle} onMouseEnter={() => handleSubMenuEnter('education')} onMouseLeave={handleSubMenuLeave}>
                      Education
                      <IconButton>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                      {subMenu === 'education' && renderSubMenuLinks('education')}
                    </Typography>
                    <Typography bgcolor={`${subMenu==="publication" ?"whitesmoke":""}`} pl={2}  sx={platformStyle} onMouseEnter={() => handleSubMenuEnter('publication')} onMouseLeave={handleSubMenuLeave}>
                      Publication
                      <IconButton>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                      {subMenu === 'publication' && renderSubMenuLinks('publication')}
                    </Typography>
                  </Stack>
                </Box>
              )}
            </Box>
            <Btn
             
              color='inherit'
              size='small'
              component={Link}
              to={"/knowledge"}
              sx={{ borderBottom: isCurrentPage("/knowledge") ? '3px solid blue' : 'none', ml: 1, borderRadius: "0px","&:hover":{
                    color:"blue"
                  } }}
            >
             
              Knowledge Hub
            </Btn>
            <Btn component={Link} to="/letsSpeack"
             
              color='inherit'
              size='small'
              sx={{ borderBottom: isCurrentPage("/letsSpeack") ? '3px solid blue' : 'none', ml: 1, borderRadius: "0px","&:hover":{
                    color:"blue"
                  } }}
            >
              
              Let's Speak
            </Btn>
          </Box>
        </Box>
        <IconButton color='inherit' onClick={handleShow} sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
       
      </Toolbar>
    </AppBar>
  );
};

export default Header;
