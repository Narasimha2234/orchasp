import { Box, styled } from "@mui/material";
const InfoBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    borderRadius: theme.shape.borderRadius,
    height: "90%",
  }));

const AnnualReports = () => (
    <InfoBox >
  
     <Box component={"a"} href='https://orchasp.com/wp-content/uploads/2021/08/Orchasp-2021.pdf' target='_blank'>
     <img
        src={"https://orchasp.com/wp-content/uploads/2021/08/Corporate-Presentation.jpg"}
        alt="Corporate Presentation"
        
        style={{ width: "100%", height: "auto", marginTop: 10 }}
      />
     </Box>
    </InfoBox>
  );
  export default AnnualReports