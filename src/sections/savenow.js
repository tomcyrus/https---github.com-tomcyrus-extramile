/** @jsx jsx */
import { jsx, Box, Container, Flex, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import faq from 'assets/images/faq.webp';
import { LearnMore } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';
import app from 'assets/images/savenow.jpg';

import check from 'assets/images/icons/check-circle.png';
import { Link } from 'components/link';
// import {Motion, spring} from 'react-motion';
// import ReactWhatsapp from 'react-whatsapp';

const data = [
  {
    title: ' How can I borrow or take a loan from Extramile Africa?',
    contents: (
      <div>
        It is simply by joining or becoming a member of ExtraCoop by Extramile Africa. How to join? How to benefit?
        <br></br>
      </div>
    ),
  },
  {
    title: ' How can I buy and pay on instalment from Extramile Africa?',
    contents: (
      <div>
       It is simply by using our buy now pay later or pay as you go goodies on Extrastore. 
       You pick and buy a product or service, pay down 30% and you spread your payment base 
       on the payment plan you pick. When you visit ExtraStore, go to any category of your choice and start exploring.
        <br></br>
      </div>
    ),
  },
  {
    title: ' What are the other benefits I can enjoy joining ExtraCoop by Extramile Africa?',
    contents: (
      <div>
       Lots of juicy packages;
        <br></br>
        1. Extrawealth Access <br></br>
        2. Own a property or land bank in any of our Estates; Extramile Homes and Properties and pay small small<br></br>
        3. Extraride- Get a car or motorbike for business and pay small small
      </div>
    ),
  },
  
  
];

// const App = () => (
//   <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
// );

const Savenow = () => {
  return (
    
    <section id="features" sx={styles.section}>
      <Container>
      
        

        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            {/* <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="ExtraStore and drives"
              description="ExtraStore powers and drives discounted prices and pay as you go (we partner with small businesses to deliver pay as you go services to our buyers). We snap products and put our prices on them. (Under Extrastore, we have categories;"
            /> */}
               <center>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRCn4q-zUEZTq0Opi5s6mvdCZ2NJXUwYnN8mpSXtO0CAT5Ug/viewform?embedded=true" width="370" height="427" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</center>

            <Box sx={styles.features}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRCn4q-zUEZTq0Opi5s6mvdCZ2NJXUwYnN8mpSXtO0CAT5Ug/viewform?embedded=true">
            <Button >Save Now Form</Button>
            </a>
            </Box>
            
           <br></br>
           {/* <LearnMore label="Learn more" path="#!" /> */}
          </Box>
          <Box sx={styles.illustration}>
            <Image src={app} alt="workHard" />
          </Box>
          <br></br>
        </Grid>  
          
      </Container>
    </section>



  
    
  );
};

export default Savenow;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
    borderRadius:["45px"],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
