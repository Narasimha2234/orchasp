import { Box, Typography } from '@mui/material';
import React from 'react';

const Disclaimers = () => {
  return (
    <Box sx={{ p: 3, mx: 2, width:"80%",margin:"auto" }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>Disclaimer for ORCHASP LTD</Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }} mt={5}>
          If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <a href="mailto:info@orchasp.com">info@orchasp.com</a>. Our Disclaimer was generated with the help of the <Typography component="a" href='https://www.disclaimergenerator.net/' target='_self' sx={{ textDecoration: 'underline' }}>Disclaimer Generator</Typography>.
        </Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, }}>Disclaimers for Orchasp</Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
          All the information on this website - <a href="https://orchasp.com/">https://orchasp.com/</a> - is published in good faith and for general information purpose only. Orchasp does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (Orchasp), is strictly at your own risk. Orchasp will not be liable for any losses and/or damages in connection with the use of our website.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
          From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
          Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.
        </Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, }}>Consent</Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>By using our website, you hereby consent to our disclaimer and agree to its terms.</Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1,  }}>Update</Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</Typography>
      </Box>
    </Box>
  );
};

export default Disclaimers;
