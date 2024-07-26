import React from 'react';
import { Card, CardContent, Typography, Stack, Link } from '@mui/material';

const CareerCard = ({ career }) => {
  return (
    <Card sx={{ width: '90%', m: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {career.Role}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Experience: {career.experience}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Qualification: {career.qualification}
        </Typography>
        <Typography variant="body2">
          Job Function: {career.jobFunction}
        </Typography>
        <Typography variant="body2">
          Job Role: {career.jobRole}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Skills Required:
        </Typography>
        <Stack spacing={1} sx={{ pl: 2 }}>
          {career.skills_required.map((skill, index) => (
            <Typography key={index} variant="body2">
              - {skill}
            </Typography>
          ))}
        </Stack>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Contact:{' '}
          <Link href={`mailto:${career.contactUs}`} underline="hover">
            {career.contactUs}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
