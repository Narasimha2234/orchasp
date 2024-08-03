import { Box, Grid, ListItem, Stack, Typography } from "@mui/material"

const CommittesAndPolices = ()=>{

    return(
      <Box sx={{ width: "85%", margin: "auto", padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ borderRight: { md: "1px solid", xs: "none" }, pr: { md: 2, xs: 0 }, pb: { xs: 2, md: 0 } }}>
                <Typography variant='h5'>Committees</Typography>
                <Stack spacing={1} mt={5}>
                  <Typography variant='h6'>Audit Committee</Typography>
                  <Typography variant='body1' pl={2} component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Audit-Committee-Charter.pdf' target='_blank' sx={{ textDecoration: "none" }}>• Committee Charter</Typography>
                  <Typography variant='h6'>Nomination & Remuneration Committee</Typography>
                  <Typography variant='body1' pl={2} component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/NominationRemunerationCommitteeCharter.pdf' target='_blank' sx={{ textDecoration: "none" }}>• Committee Charter</Typography>
                  <Typography variant='h6'>Stakeholder Committee</Typography>
                  <Typography variant='body1' pl={2} component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Stakeholders-Relation-Commitee-Charter.pdf' target='_blank' sx={{ textDecoration: "none" }}>• Committee Charter</Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 10, xs: 0 } }}>
                <Typography variant='h5'>Shareholder Grievance Redressal</Typography>
                <Stack spacing={1} mt={5}>
                  <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Commitee-Composition.pdf'>• Committee Composition</ListItem>
                  <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Corporate-Governance.pdf'>• Corporate Governance Guidelines</ListItem>
                  <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/DraftAppointmentlettertoIndpendentDirectors.pdf'>• Draft Appointmentletter to Indpendent Directors</ListItem>
                  <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Nomination-and-Remuneration-Policy-.pdf'>• Nomination & Remuneration Policy</ListItem>
                  <ListItem variant='body1' component={"a"} href='https://orchasp.com/wp-content/uploads/2021/07/Whistle-Blower-Policy-.pdf'>• Whistle Blower Policy</ListItem>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
    )
    }
    export default CommittesAndPolices