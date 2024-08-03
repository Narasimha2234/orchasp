import { Box, styled, Typography } from "@mui/material"
import { useAnimation, useInView,motion } from "framer-motion";
import { useEffect, useRef } from "react";


const InfoBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    height: "100%",
  }));
const AnnualReports = () =>{
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
      <Typography variant="h6" gutterBottom>
        Annual Reports
      </Typography>
      <img
        src={"https://orchasp.com/wp-content/themes/orchasp/assets/images/homepage/anual-report-new.jpg "}
        alt="Annual Report"
        style={{ width: "100%", height: "auto" }}
      />
      <Typography variant="body2" align="center">
        2020-2021
      </Typography>
    </InfoBox>
     </motion.div>
   
  );
  }
export default AnnualReports  