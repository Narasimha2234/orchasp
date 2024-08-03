import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import ClientsCarousal from "../home/ClientsCarousal";
import {  useTheme as useMuiTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#b3e5fc",
  padding: "10px",
//   borderRadius: "10px",
  width: "100%",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
}));

const FormImage = styled("img")({
  width: "60%",
  height: "80%",
  borderRadius: "10px",
});

const FormSection = styled(Box)({
  flex: 1,
  padding: "20px",
});

const IframeContainer = styled(Box)({
  width: "100%",
  height: "70vh",
  maxWidth: "800px",
  margin: "20px auto",
  boxSizing: "border-box",
  overflow: "hidden",
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
  },
});

const PatnerWithUs = () => {
    const theme = useMuiTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate=useNavigate()
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/send-email", data);
      navigate("/success")
     
    } catch (error) {
      console.error("There was an error sending the email:", error);
      alert("Failed to send email");
    }
  };
 

  return (
    <Stack>
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "80vh" },
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          src="https://orchasp.com/wp-content/uploads/2021/07/Orchasp-partner-with-us-1.mp4"
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
            position: "absolute",
            right: { xs: "2%", md: "0%" },
            top: { xs: "20%", md: "40%" },
            textAlign: "right",
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            variant="h2"
            lineHeight="1.2"
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, width: "auto" }}
          >
            TURN YOUR EXPERTISE INTO A REVOLUTION.
          </Typography>
        </Stack>
      </Box>
      <Box backgroundColor="#b3e5fc">
        <Typography textAlign={"center"} m={4} variant="h4" color={"secondary"}>
          Great partnerships do start with a ping.
        </Typography>
        <Typography textAlign={"center"} variant="h6" component={"p"}>
          Extend an arm, and we will create a body of work that’s unmatched and
          inspired.
        </Typography>
        <Typography textAlign={"center"} variant="h6" component={"p"}>
          Just drop us a message, and we’ll get back to you.
        </Typography>
      </Box>
      <FormContainer>
        <FormSection sx={{ml:"10%"}}>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            ENQUIRE NOW
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register("name", { required: "Your Name is Required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                InputProps={{
                  style: { backgroundColor: "whitesmoke" },
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  style: { backgroundColor: "whitesmoke" },
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                label="Mobile"
                variant="outlined"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Invalid phone number ",
                  },
                })}
                error={!!errors.mobile}
                helperText={errors.mobile?.message}
                InputProps={{
                  style: { backgroundColor: "whitesmoke" },
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                {...register("message", { required: "Please brief us about your Requirment" })}
                error={!!errors.message}
                helperText={errors.message?.message}
                InputProps={{
                  style: { backgroundColor: "whitesmoke" },
                }}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#1565c0",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#0d47a1",
                },
              }}
            >
              SUBMIT
            </Button>
          </form>
        </FormSection>
        <ImageSection>
          <FormImage 
            sx={{ mt: "50px" ,marginLeft:"80px"}}
            src="https://orchasp.com/wp-content/uploads/2021/07/Image.png"
            alt="Laptop"
          />
        </ImageSection>
      </FormContainer>
      <IframeContainer>
        <iframe
          title="Google Maps location of Orchasp Limited"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.804850228722!2d78.50521837493673!3d17.469052083432132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a581d14c259%3A0x2b35f73c8eea725c!2sOrchasp%20Limited!5e0!3m2!1sen!2sin!4v1722231516975!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </IframeContainer>
      <Box margin={2} marginLeft={15}>
        <Typography color={"secondary"} variant="h5" textAlign={"left"}>
          Orchasp Limited
        </Typography>
        <Typography variant="h6" textAlign={"left"}>
          19 & 20, Moti Valley, Trimulgherry, Secunderabad,
        </Typography>
        <Typography variant="h6" textAlign={"left"}>
          Telangana 500015, India.
        </Typography>
      </Box>
      <Box marginLeft={15}>
        <Typography color={"secondary"} variant="h5" textAlign={"left"}>
          CALL US
        </Typography>
        <Typography variant="h6" textAlign={"left"}>
          +91 040 4776 6123
        </Typography>
        <Typography variant="h6" textAlign={"left"}>
          contact@orchasp.in
        </Typography>
      </Box>
      <Box mt={6} sx={{backgroundImage: "url(https://orchasp.com/wp-content/themes/orchasp/assets/images/about-us/Last%20Banner_N.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <Stack spacing={2} alignItems="center" py={4} sx={{backgroundColor: theme.palette.background.default, color: theme.palette.text.primary}}>
        <Typography variant='h4' textAlign="center">Our Esteemed Clients</Typography>
        <Typography variant='h6' textAlign="center">Our clients are our partners in bringing about the big technological revolution.</Typography>
       
      </Stack>
      <ClientsCarousal/>
    </Box>
       
      
    </Stack>
  );
};

export default PatnerWithUs;