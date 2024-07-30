import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography, Stack, Snackbar, Slide } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#b3e5fc",
  padding: "20px",
  borderRadius: "10px",
  width: "100%",
  margin: "auto",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",
  },
}));

const FormImage = styled("img")({
  width: "80%",
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

const LetsSpeak = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/send-email", data);
      alert("Email sent successfully");
     
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
          component="img"
          src="https://orchasp.com/wp-content/uploads/2021/07/Banner-1-4.png"
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
            There’s Always Power In Binary. Let’s Do A One-On-One?
          </Typography>
        </Stack>
      </Box>
      <FormContainer>
        <FormSection>
          <Typography variant="h4" textAlign={"center"} color={"primary"}>Drop us a hello here</Typography>
          <Typography variant="h6" gutterBottom>If you are seeking solutions that will help accelerate your business growth at breakneck speed. welcome aboard. Connect with your message and we will get back in no time.</Typography>
          <Typography variant="h5" component="h2" color="primary" gutterBottom>
            ENQUIRE NOW
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register("name", { required: "your name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
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
              />
            </Box>
            <Box sx={{ marginBottom: "15px" }}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                {...register("message", { required: "please add some message" })}
                error={!!errors.message}
                helperText={errors.message?.message}
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
            src="https://orchasp.com/wp-content/uploads/2021/07/Baner-2-Image-1.png"
            alt="Laptop"
          />
        </ImageSection>
      </FormContainer>
      <IframeContainer>
        <iframe
        title="orchasp"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.804850228722!2d78.50521837493673!3d17.469052083432132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a581d14c259%3A0x2b35f73c8eea725c!2sOrchasp%20Limited!5e0!3m2!1sen!2sin!4v1722231516975!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </IframeContainer>
     
    </Stack>
  );
};

export default LetsSpeak;


