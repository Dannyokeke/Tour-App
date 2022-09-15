import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import ImageCollage from '../components/ImageCollage'
import ControlledAccordions from "../components/Accordion";
import FixedBottomNavigation from "../components/BottomNavigation";

const Tour = () => (
  <Container sx={{width:900 }}>
      <Typography variant="h3" component='h1' marginTop={5}>
          Immerse  Into The Falls
      </Typography>
      <Box marginTop={3} sx={{display:'flex'}}>
          <img src="data:image/jpeg;base64,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"
          alt=""
          height={300}/>
          <ImageCollage/>
      </Box>
      <Box>
      <Typography variant='h6' component='h3' marginTop={3}>
                    About this page
      </Typography>
      <Typography variant='paragraph' component='p' marginTop={3}>
      Content creation is the contribution of information to any media and most especially to digital media for an end-user/audience in specific contexts. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts" for self-expression, distribution, marketing and/or publication. Typical forms of content creation include maintaining and updating web sites, blogging, article writing, photography, videography, online commentary, the maintenance of social media accounts, and editing and distribution of digital media. A Pew survey described content creation as the creation of "the material, people contribute to the online world.
      </Typography>           
      </Box>
      <Box>
      <Typography variant='h6' component='h3' marginTop={3}>
                    Frequently Asked Questions
      </Typography>
      <ControlledAccordions/>         
      </Box>
      <FixedBottomNavigation/>
  </Container>
);

export default Tour;