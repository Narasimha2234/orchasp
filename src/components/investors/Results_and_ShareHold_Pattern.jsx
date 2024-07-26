import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ResultsAndShareHoldPattern = ({ quarterlyResults, shareHoldingPattern }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "85%", margin: "auto", padding: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box >
            <Typography variant='h6'>Quarterly Results</Typography>
            <Box >
              {quarterlyResults.map((each) => (
                <Accordion key={each.id} expanded={expanded === `panel${each.id}`} onChange={handleChange(`panel${each.id}`)}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{each.title}</Typography>
                  </AccordionSummary>
                  {each.results.map((result) => (
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
            <Typography variant='h6'>Share Holding Pattern</Typography>
            <Box >
              {shareHoldingPattern.map((each) => (
                <Accordion key={each.id} expanded={expanded === `panel${each.id + quarterlyResults.length}`} onChange={handleChange(`panel${each.id + quarterlyResults.length}`)}>
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
      </Grid>
    </Box>
  );
};

export default ResultsAndShareHoldPattern;
