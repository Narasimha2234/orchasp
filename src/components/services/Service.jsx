import React from 'react'
import { Box, Typography, Stack, Divider } from "@mui/material";
import serviceVideo from "../../assets/services/Orchasp-Services.mp4"
import {Services} from "./serviceData"


const Service = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "80vh" }, 
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          src={serviceVideo}
          autoPlay
          loop
          muted
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Stack
          sx={{
            right: { xs: "2%", md: "10%" },
            top: { xs: "20%", md: "10%" },
            paddingLeft: { md: "50vw" },
            paddingTop: { md: "15vh" },
            textAlign: "center", 
          }}
        >
          <Typography
            mt={{ xs: 4, md: 10 }}
            color="white"
            textAlign="center"
            variant="h4"
            lineHeight="1.2"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, width: "auto" }}
          >
            Built-In Automation. To Break All Boundaries.
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ padding: { xs: 2, md: 4 }, backgroundColor: "skyblue" }}>
        {Services.map((service, index) => (
          <Box
            key={service.id}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              alignItems: "center",
              mb: 4,
              backgroundColor: "transparent",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={service.img}
              alt={service.header}
              sx={{
                width: { xs: "100%", md: "33%" },
                height: "auto",
                objectFit: "cover",
                mb: { xs: 2, md: 0 },
              }}
            />
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                marginLeft: { md: index % 2 === 0 ? 4 : 0 },
                marginRight: { md: index % 2 !== 0 ? 4 : 0 },
                textAlign: "left", 
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                fontSize={{ xs: "20px", md: "24px" }}
                color={"#0949af"}
              >
                {service.header}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ mt: 1, fontSize: { xs: "16px", md: "19px" } }}
              >
                {service.content}
              </Typography>
              <Box
                display="flex"
                mt={{ xs: 2, md: "60px" }}
                flexDirection="row"
                justifyContent="center"
              >
                {index % 2 === 0 ? (
                  <>
                    <Divider
                      sx={{
                        height: "1px",
                        mt: "30px",
                        bgcolor: "primary.main",
                        width: "90%",
                      }}
                    />
                    <Box
                      component="img"
                      height="54px"
                      width="54px"
                      src={service.logo}
                      sx={{ objectFit: "cover", marginBottom: "-20px" }}
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <Box
                      component="img"
                      height="54px"
                      width="54px"
                      src={service.logo}
                      sx={{ objectFit: "cover", marginBottom: "-20px" }}
                      alt=""
                    />
                    <Divider
                      sx={{
                        height: "1px",
                        mt: "30px",
                        bgcolor: "primary.main",
                        width: "90%",
                      }}
                    />
                  </>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box>
        <Box
          sx={{
            backgroundColor: "#0c4aa7",
            padding: { xs: 2, sm: 3, md: 4 },
            textAlign: "center", 
          }}
        >
          <Typography m={{ xs: 1, sm: 2, md: 4 }} color={"skyblue"} variant={"h4"}>
            Extend Capabilities With Staff
          </Typography>
        </Box>

        <Box
          display={"flex"}
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{
            backgroundColor: "#0c4aa7",
            padding: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Stack
            m={{ xs: 2, sm: 2 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Box sx={{ height: "370px", width: "370px" }}>
              <Box
                component={"img"}
                src="https://orchasp.com/wp-content/uploads/2021/07/Image-09-2.png"
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Stack>
          <Stack
            mt={{ xs: 2, sm: 4, md: 13 }}
            pl={{ xs: 2, sm: 4, md: 7 }}
            pr={{ xs: 2, sm: 4, md: 15 }}
            textAlign={{ sm: "justify" }} 
          >
            <Typography
              fontSize={{ xs: 14, sm: 16, md: 18 }}
              lineHeight={1.6}
              color={"white"}
              variant={"body2"}
              component={"p"}
            >
              We assess business needs of our clients and help rescale resources
              to meet goals at a fast-tracked pace. We align processes with an
              extended team with specialized skillsets, which includes
              development, feedback, and end-to-end project completion. Our
              Staff Augmentation Solutions help reduce operational costs, while
              ensuring flexibility and scalability.
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Service