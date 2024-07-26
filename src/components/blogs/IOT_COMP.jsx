import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const posts = [
  {
    id:1,
    image: "https://orchasp.com/wp-content/uploads/2021/08/AI.jpg",
    title: "How Artificial Intelligence helps in structuring data",
    date: "AUG 04, 2021",
    description:
      "The Internet provides masses of information that was impossible to obtain just a few years ago. The growing use of smartphones, Internet of Things (IoT) devices and customer relationship management (CRM) systems.",
  },
  {
    id:2,
    image: "https://orchasp.com/wp-content/uploads/2021/08/iot-device.jpg",
    title:
      "IoT devices provide invaluable assistance to the healthcare industry, during the current pandemic",
    date: "AUG 04, 2021",
    description:
      "The current pandemic has made it increasingly clear that Internet of Things (IoT) technologies are playing a critical role in delivering safe and effective care health systems, around the world.",
  },
];

const IOT_COMP = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "80vh" },
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="	https://orchasp.com/wp-content/uploads/2021/08/iot-device.jpg"
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
      </Box>
      <Stack pl={{ xs: 2, md: 5 }} pr={{ xs: 2, md: 5 }}>
        <Grid mt={4} container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography textAlign={"left"} variant="h6" gutterBottom>
              IoT devices provide invaluable assistance to the healthcare
              industry, during the current pandemic
            </Typography>
            <Typography mt={3} textAlign={"justify"} variant="h5" gutterBottom>
              The current pandemic has made it increasingly clear that Internet
              of Things (IoT) technologies are playing a critical role in
              delivering safe and effective care health systems, around the
              world.
            </Typography>
            <Typography mt={4} textAlign={"justify"} variant="body1" paragraph>
              The current pandemic has made it increasingly clear that Internet
              of Things (IoT) technologies are playing a critical role in
              delivering safe and effective care health systems, around the
              world. In addition to directly improving health service delivery,
              IoT devices have also proven their potential in improving the
              accessibility of preventative public health services,while also
              transitioning current secondary and tertiary health care
              mechanisms to be safer and better coordinated.
            </Typography>

            <Typography textAlign={"justify"} variant="h6" gutterBottom>
              More care, less contact
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              With the end of the Covid 19 health crisis nowhere in sight, the
              healthcare industry has been innovating new ways of testing and
              treating patients, while reducing in-person contact unless it is
              absolutely necessary. IoTdevices have stepped in, making this
              possible.A few of the most visible areas where IoT devices have
              eased the burden on a strained environment include tele medicine,
              contact tracing and robotic sanitisation.
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              Starting with monitoring a patient’s temperature (one of the
              symptoms of Covid 19), wearable IoT devices provide necessary
              information about the patient’s history of co-morbidities, current
              heart rate, blood sugar level, blood oxygen level and other vitals
              without any intermediate human intervention.With this data,
              physicians are able to monitor the patient via tele-medical
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              consultations and respond quickly, saving time, money and lives in
              the process.
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              IoT devices are playing an important role in another important
              aspect of this pandemic – Contract tracing. Wearable IoT devices
              like smartwatches and Real-time location systems such as Radio
              Frequency Identification(RFID) bracelets enable healthcare workers
              to keep a track of infected patients and their contactsand also
              monitor quarantine and recuperation periods of these people. Using
              artificial intelligence (AI) and Big Data,the information
              collectedis analysed. By doing this, most affected areas can be
              confined from other areas, and proper methods for quarantine and
              isolation can be administered to efficiently control the spread of
              this virus.As a result, further spread of the virus is prevented
              to a large extent.
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              There are also non-wearable IoT medical devices likenon-surgical
              robots that are being used extensivelyto deal with present day
              circumstances.Non-surgical robots are being used to sanitise
              hospital rooms after each patient visit, using UV-light which is
              harmful to humans if exposed. Once the sanitation process is
              complete, physicians, nurses and other patients can safely enter
              the room quickly, without fear of the presence of aerosol
              particles of the virus. Robotic disinfection methods highly
              effective, when compared to traditional disinfection methods which
              are limited to surface areas only.
            </Typography>
            <Typography textAlign={"justify"} variant="h6" gutterBottom>
              Additional benefits
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              These devices collect data that can be used to understand the
              nature of this virus in specific patient profiles and specific
              clusters. This information will provide invaluable insights to R&D
              teams as they go about their quest for finding solutions.
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              IoT devices are easy to manufacture, deploy and maintain. Having
              inbuilt data security mechanisms, they protect patient identity
              information (PII) and patient health information (PHI) that can be
              accessed only by those who have the permission to do so.
            </Typography>
            <Typography textAlign={"justify"} variant="body1" paragraph>
              IoT devices are becoming more and more popular and have been
              setting new trends in the medical field. This is comforting not
              only to people in the healthcare industry, but to patients who are
              the recipients of the care as well.
            </Typography>
          </Grid>
          <Grid mt={6} item xs={12} md={4}>
            <Box sx={{ position: "sticky", top: "16px" }}>
              <Typography variant="h6" gutterBottom>
                Recent Posts
              </Typography>
              {posts.map((post, index) => (
                <Box component={Link} to={`/blog/${post.id}`} sx={{textDecoration:"none"}}>

                
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent sx={{ display: "flex", alignItems: "center" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 80, height: 70, mr: 2 }}
                      image={post.image}
                      alt={post.title}
                    />
                    <Box>
                      <Typography variant="body1">{post.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default IOT_COMP;