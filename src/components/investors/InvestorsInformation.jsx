import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItemButton, ListItemText, Divider, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

const InvestorsInformation = ({ corporate_governance, notices }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "85%", margin: "auto", padding: 2 }}>
      <Typography variant='h5' textAlign="center">Investors Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box >
            <Typography variant='h6'>Corporate Governance</Typography>
            <Box >
              {corporate_governance.map((each) => (
                <Accordion key={each.id} expanded={expanded === `panel${each.id}`} onChange={handleChange(`panel${each.id}`)}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{each.title}</Typography>
                  </AccordionSummary>
                  {each.content.map((result) => (
                    <AccordionDetails key={result.id}>
                      <Typography component="a" href={result.path} target="_blank" sx={{ textDecoration: "none" }}>
                        {result.title}
                      </Typography>
                    </AccordionDetails>
                  ))}
                </Accordion>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box >
            <Typography variant='h6'>Notices</Typography>
            <Box >
              {notices.map((each) => (
                <List key={each.id} component="a" target='_blank' href={each.path} sx={{ textDecoration: "none", color: "black" }}>
                  <ListItemButton>
                    <PictureAsPdfOutlinedIcon />
                    <ListItemText primary={each.title} />
                  </ListItemButton>
                  <Divider variant='middle' />
                </List>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvestorsInformation;
