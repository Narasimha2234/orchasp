import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';

const PatnerWithUsForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 600, p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" color="textSecondary">
          We'd love to hear from you!
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: 'Invalid mobile number',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile"
                    variant="outlined"
                    fullWidth
                    error={!!errors.mobile}
                    helperText={errors.mobile ? errors.mobile.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                rules={{ required: 'Message is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default PatnerWithUsForm;
