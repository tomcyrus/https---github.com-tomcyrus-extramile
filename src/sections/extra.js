/** @jsx jsx */
import { jsx, Box, Container, Flex, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import faq from 'assets/images/faq.webp';
import { LearnMore } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';
import app from 'assets/images/shop.png';

import check from 'assets/images/icons/check-circle.png';
import { Link } from 'components/link';
// import {Motion, spring} from 'react-motion';
// import ReactWhatsapp from 'react-whatsapp';

const data = [
  {
    title: 'How can I borrow or take a loan from Extramile Africa?',
    contents: (
      <div>
        It is simply by joining or becoming a member of ExtraCoop by Extramile Africa.
        <br></br>
      </div>
    ),
  },
  {
    title: 'How can I access and pay on instalment on Extramile Africa?',
    contents: (
      <div>
      It is simply by using our Access Now Pay Later on Extracredit. 
      You pick and buy a product or service, pay down 30% and you spread your payment base on the payment plan you pick. 
      Go to Access Now Pay Later page, go to any category of your choice and start exploring.
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

const App = () => (
  <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
);

const PremiumFeature = () => {
  return (
    
    <section id="features" sx={styles.section}>
      <Container>
      <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="ExtraStore and drives"
              description="ExtraCoop Membership Access helps you to unlock the power of a winning Community

Unlock your Extracredit (Access Now Pay Later) and Extrawealth (Extramile Africa 5-sigma Business Portfolios Partnerships) by becoming a member of Extramile Cooperative- ExtraCoop today.

Unlock your membership with ExtraCoop by Extramile Africa

All you need to do is to get started this exciting journey with us, you can achieve your financial, business or project goals by joining today, ExtraCoop by Extramile Africa. Join now.

You can start accessing and owning your working tools, gadgets, electronics, phones, furniture, solar power, light equipment, and machines, bikes and vehicles and other non-consumable items on credit with just few simple steps;

One, be a member of ExtraCoop which is your #1 Africa hybrid cooperative plugin, gives you instant power to own while you keep paying for it.

Two, fill the online membership form of ExtraCoop and become automatic member for life.

Third, make you membership payment of just 3,500 Naira and upload your proof of payment, you immediately unlock your Extracredit and Extrawealth Access to loads of offerings and benefits.;"
            />
           

            <Box sx={styles.features}>
          
            </Box>
            
           <br></br>
           {/* <LearnMore label="Learn more" path="#!" /> */}
          </Box>
          <Box sx={styles.illustration}>
            <Image src={app} alt="workHard" />
          </Box>
          <br></br>
        </Grid>
        
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={faq} alt="faq" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              // emoji={emoji}
              sx={styles.heading}
              title="Extracoop FAQ"
             
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
            <br></br> 
            
          </Box>
               
 
        </Grid>  

         
          
      </Container>
    </section>



  
    
  );
};

export default PremiumFeature;

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
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
