
import React from 'react';
import { Container, Typography, Button, Card, CardContent, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AnimatedButton = motion(Button);

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', marginTop: '90px' }}>
      <Card elevation={3} style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
        <CardContent>
          <Box
            component={motion.div}
            initial={{ rotateY: -720 }}
            animate={{ rotateY: 0, transition: { duration: 1 } }}
          >
            <CheckCircleIcon style={{ fontSize: '80px', color: '#4caf50' }} />
          </Box>
          <Typography variant="h4" gutterBottom style={{ marginTop: '20px', color: '#333' }}>
            Thank You!
          </Typography>
          <Typography variant="body1" gutterBottom style={{ marginBottom: '20px', color: '#555' }}>
            Thank you for visiting the ORCHASP website. We received your email.
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '20px', color: '#777' }}>
            Our Representative will get back to you very soon.
          </Typography>

          <AnimatedButton
            onClick={() => navigate("/")}
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
            animate={{
              scale: [1, 1.01],
              boxShadow: ["0px 0px 10px rgba(0, 0, 0, 0.2)", "0px 0px 20px rgba(0, 0, 0, 0.5)", "0px 0px 10px rgba(0, 0, 0, 0.2)"],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Back to Home
          </AnimatedButton>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ThankYouPage;
