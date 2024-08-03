import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, styled, Typography } from "@mui/material"

import { motion, useAnimation, useInView } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef } from "react";

const InfoBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    height: "100%",
  }));
const StockInfo = () => {
    const ref=useRef()
    const inView=useInView(ref)
    const animationControl=useAnimation()
    useEffect(()=>{
      if(inView){
        animationControl.start("visible")
      }else{
        animationControl.start("initial")
      }
    })
      const slideupVariant={
        initial:{
          opacity:0,
          y:110
        },
        visible:{
          opacity:1,
          y:0,
          transition:{ 
            duration:2
          }      
        }
      }
    return(
      <motion.div ref={ref} variants={slideupVariant} initial="initial" animate={animationControl} >
    <InfoBox>
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">ORCHASP LIMITED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                Symbol
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2">
                ORCHASP.BO
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                Price
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2" fontWeight="bold">
                ₹3.37
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                Change
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2">
                0.16
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                % Change
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2">
                4.98%
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                Volume
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2">
                ₹964.65K
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                52 week range
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2">
                3.20 - 3.37
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                Shares outstanding
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2">
                -
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"left"} variant="body2">
                Market cap
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography textAlign={"right"} variant="body2">
                -
              </Typography>
            </Grid>
  
          </Grid>
        </AccordionDetails>
      </Accordion>
  
    </InfoBox>
    </motion.div>
  
  );
  }
  export default StockInfo