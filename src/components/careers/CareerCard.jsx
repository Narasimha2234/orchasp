import React from 'react';
import { Card, CardContent, Typography, Stack, Link } from '@mui/material';

const CareerCard = ({ career }) => {
  
  return (
    <Card sx={{ width: '90%', m: 2 }}>
      <CardContent>
        {career.Role && (
          <Typography variant="h5" component="div">
            {career.Role}
          </Typography>
        )}
        {career.experience && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Experience: {career.experience}
          </Typography>
        )}
        {career.qualification && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Qualification: {career.qualification}
          </Typography>
        )}
        {career.jobFunction && (
          <Typography variant="body2">
            Job Function: {career.jobFunction}
          </Typography>
        )}
        {career.jobRole && (
          <Typography variant="body2">
            Job Role: {career.jobRole}
          </Typography>
        )}
        {career.skills_required && career.skills_required.length > 0 && (
          <>
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
          </>
        )}
        {career.contactUs && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Contact: 
            <Link href={`mailto:${career.contactUs}`} underline="hover">
              {career.contactUs}
            </Link>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CareerCard;
