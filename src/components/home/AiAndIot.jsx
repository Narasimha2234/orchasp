import { Box, Container, Divider, Grid, Typography } from "@mui/material"
import { statsData } from "./data"
import React, { useEffect, useRef } from "react"
import AnimatedNumber from "./AnimatedNumber"
import { motion, useAnimation, useInView } from "framer-motion"

const AiAndIot = ()=>{
    const ref=useRef()
    const inView=useInView(ref,{once:true})
    const animationControl=useAnimation()
    useEffect(()=>{
      if(inView){
        animationControl.start("visible")
      }
    },[inView])
    const AnimatedGrid=motion(Grid)
    return(
    <Box sx={{ backgroundColor: "#0747a6", overflowX: "hidden" }} >
      <Container margin={"20px"} sx={{ backgroundColor: "#0747a6" }}>
          <Grid container spacing={2} ref={ref}
           
          >
           
            <AnimatedGrid item xs={12}
              
              whileHover={{
                scale:1.05
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, 
                  alignItems: "center",
                  padding: 2,
                  backgroundColor: "#0747a6",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <img
                    src={"https://orchasp.com/wp-content/uploads/2021/07/09-Object-1.png"}
                    alt="Application Development"
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ marginLeft: { sm: 7 }, textAlign: { xs: "center", sm: "left" } }}>
                    <Typography
                      color={"#0bb7e5"}
                      variant="h5"
                      component="h2"
                      fontSize={"24px"}
                    >
                      How Artificial Intelligence helps in structuring data
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        marginTop: 1,
                        textAlign: "justify",
                        fontSize: "17px",
                        fontWeight: "200",
                        color: "#ffff",
                      }}
                    >
                      The Internet provides masses of information that was
                      impossible to obtain just a few years ago. The growing use of
                      smartphones, Internet of Things (IoT) devices and customer
                      relationship management (CRM) systems, as well as data
                      gathered from online shopping behavior, social media profiles
                      and activity, such as likes and dislikes, product
                      reviews, tagged and shared content, have together resulted in a
                      truly vast data universe in the digital space today.
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </AnimatedGrid>
  
  
          <AnimatedGrid item xs={12} mb={4}
              
               whileHover={{
                scale:1.05
               }}
              >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                padding: 2,
                backgroundColor: "#0747a6",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  color={"#0bb7e5"}
                  variant="h5"
                  component="h2"
                  textAlign={"justify"}
                  fontSize={"24px"}
                >
                  IoT devices provide invaluable assistance to the healthcare
                  industry
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    marginTop: 1,
                    textAlign: "justify",
                    fontSize: "17px",
                    color: "#ffff",
                  }}
                >
                  IoT devices are playing an important role in another important
                  aspect of this pandemic – Contact tracing. Wearable Iimport ClientsCarousal from './ClientsCarousal';
                  oT
                  devices like smartwatches and Real-time location systems such
                  as Radio Frequency Identification (RFID) bracelets enable
                  healthcare workers to keep a track of infected patients and
                  their contacts and also monitor quarantine and recuperation
                  periods of these people. Using artificial intelligence (AI)
                  and Big Data, the information collected is analyzed.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src={"https://orchasp.com/wp-content/uploads/2021/07/09-Object-2.png"}
                  alt="Cloud Enablement"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Grid>
            </Box>
          </AnimatedGrid>
        </Grid>
      </Container>
  
      <Divider color={"white"} />
  
      <Box sx={{ backgroundColor: "#0747a6", padding: 1 }}>
  
        <Grid
          mt={7}
          container
          spacing={2}
          display={"flex"}
          alignItems="center"
          justifyContent="flex-start"
          // border={"2px solid red"}
          width={"100%"}
        >
          <Grid container spacing={2} alignItems="center">
            {statsData.map((stat, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} md={3} lg={2} sx={{ textAlign: "center" }} mb={4}>
                  <Typography variant="h2" color="#0bb7e5">
                  <AnimatedNumber number={stat.number} />
                  </Typography>
                  <Typography variant="body1" color="#0bb7e5">
                    {stat.label}
                  </Typography>
                </Grid>
                {index < statsData.length - 1 && (
                  <Grid item xs={false} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: "white", height: '100px' }} />
                  </Grid>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
  
      </Box>
    </Box>
  );}
  export default AiAndIot