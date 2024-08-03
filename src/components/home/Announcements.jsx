import { Box, Divider, styled, Typography } from "@mui/material"
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";
const InfoBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    height: "100%",
  }));

const Announcements = () => {
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
   return (
   <motion.div ref={ref} variants={slideupVariant} initial="initial" animate={animationControl} >
    <InfoBox>
      <Typography padding={2} mt={1} textAlign={"left"} variant="h6" gutterBottom>
        Announcements
      </Typography>
      <Typography padding={2} mt={5} textAlign={"left"} variant="h6">
        Unaudited quarterly results within 45 days from the end of the quarter
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography padding={2} mt={5} textAlign={"left"} variant="h6">
        Audited results within 60 days from the end of the quarter
      </Typography>
    </InfoBox>
    </motion.div>
  );
  }
  export default Announcements