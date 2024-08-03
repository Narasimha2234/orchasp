import { Box, Grid, Stack, Typography } from "@mui/material"

const InvestorGrievance = ()=>{
    return(
  
    <Box sx={{ width: "85%", margin: "auto" }}>
      <Typography variant='h4' textAlign={"center"}>Investor Grievance</Typography>
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5'>Registrar & Share Transfer Agents</Typography>
            <Stack direction="row" spacing={1} mt={3}>
              <Box component="img" src='https://orchasp.com/wp-content/uploads/2021/08/Aarthi-Logo.png' height={50} width={50} />
              <Stack spacing={1}>
                <Typography>Aarathi Consultants Pvt. Ltd.</Typography>
                <Typography>#1-2-285, Domalguda, Hyderabad – 500 029, INDIA.</Typography>
                <Typography>Tel : +91-40-27638111 / 4445, 55611921,</Typography>
                <Typography>Fax: +91-40-27632184</Typography>
                <Typography>E-mail: info@aarthiconsultants.com</Typography>
                <Typography>web-site: www.aarthiconsultants.com</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h5'>Shareholder Grievance Redressal</Typography>
            <Stack spacing={1} mt={3}>
              <Typography>Ms. Sangeeta Mundhra</Typography>
              <Typography>Company Secretary and Compliance officer</Typography>
              <Typography>Orchasp Limited</Typography>
              <Typography>19 & 20, Moti Valley, Trimulgherry</Typography>
              <Typography>Secunderabad – 500015, Telangana, INDIA.</Typography>
              <Typography>Tel: +91-40-4776 6123/6124</Typography>
              <Typography>E-mail: secretarial@orchasp.com</Typography>
              <Typography>Website: www.orchasp.com</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
  }
export default InvestorGrievance  