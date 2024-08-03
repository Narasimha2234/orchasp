import { Box, Grid, Typography } from "@mui/material"
import { useAnimation, useInView ,motion} from "framer-motion"
import { useEffect, useRef } from "react"
import { withResultsData } from "./data"

const WithResultsWeRise = ()=>{
    const ref=useRef()
    const isinView=useInView(ref)
    const animationControl=useAnimation()
  
    useEffect(()=>{
      if(isinView){
        animationControl.start("visible")
      }else{
        animationControl.start("initial")
      }
    },[isinView])
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
    <Box ref={ref} sx={{ width: '90%', height: "65vh", margin: "auto", borderBottom: "1px solid", overflowX: "hidden", marginTop: "20px" }}>
      <Box sx={{ textAlign: "center", marginBottom: 5 }}>
        <Typography variant='h4' color="primary">With Results, We Rise.</Typography>
        <Typography variant='h6' mt={2} mx={{ xs: 2, sm: 9 }}>
          Our solutions don’t just help consumers or businesses, they help bring about change and make an impact.
          But don’t just take our word for it, check out our case studies.
        </Typography>
      </Box>
  
      <motion.div variants={slideupVariant} initial="initial" animate={animationControl}>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {withResultsData.map((each, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}
            sx={{
              animation: 'slideUp 5s ease',
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards',
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
            <Box sx={{
              border: "2px solid lightblue",
              height: "220px",
              width: { xs: "100%", sm: "280px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 1
            }}>
              <Box component="img" src={each.image} sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            </Box>
            <Typography fontSize={18} color="lightblue" textAlign="center">
              {each.tittle}
            </Typography>
          </Grid>
        ))}
      </Grid>
      </motion.div>
    </Box>
  );
  }
  export default WithResultsWeRise