/** @jsx jsx */
import { jsx, Box, Container, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import faq from 'assets/images/faq.webp';
import { LearnMore } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';
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

const App = () => (
  <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" />
);

const About = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
        <Grid sx={styles.grid}></Grid>
        <Grid sx={styles.grid}></Grid>
        <Grid sx={styles.grid}></Grid>
        <Grid sx={styles.grid}></Grid>
        <Grid sx={styles.grid}></Grid>
        <Grid sx={styles.grid}></Grid>
        <Grid sx={styles.grid}></Grid>
        <Grid sx={styles.grid}></Grid>
        <SectionHeading
          sx={styles.heading}
          title="About Extramile Africa"
          description="Extramile Africa: We rise by lifting others, as many people that can go the extramile with us, we are not afraid to create our own paths. 

In Africa, earnings or salaries are not enough. Monthly take home of civil servants, blue-chips workers and labourers are meagre, leading to many rushing to formal financial institutions to access loan, unfortunately, less than 4% Nigerians have access to these loans from financial institutions, it is worst in other Africa countries. 

Financial institutions couldn't serve these categories of people with loan access due to lack of data, collateral, transactions history making millions of Africans financially excluded. 

(We have Internet of Everything but not the inclusion of Everyone. Ajay Banga)

The world is tinting towards the internet of things, but Africa is still gasping for the inclusion of everyone, first, Extramile Africa is translating Africans from financial exclusion into inclusion. When people gain access, only then, internet penetration will thrive in Africa, a continent of 1.6billion people. SpeakerBankole, CEO, Extramile Africa"
        />
         
          <SectionHeading
          sx={styles.heading}
        //   title="About Extramile Africa"
          description="In Africa, a continent with over 1.6billion people, less than 4% could access loan from Banks and other formal financial institutions, making poverty and credit-gap to the be on increase.

At Extramile Africa, we keep creating new opportunities and alternative financial pathway for every underserved across Africa, in Africa and Africans in diaspora. 

 Opportunities abound. Tap into it. Extramile Africa is your new financial plugins to access limitless credit facilities with our newly launched Access Now Pay Later, you can own everyday tangibles and non-consumable items and spread payment on instalment without worries of (I don't have enough money to buy that freezer, generator, Solar power to light my shop or home, furniture to beautify my office or shop, or even that motorbike to do deliveries, everything is now possible and available on Extramile Africa.)"
        />
        
   
        </Grid>
       
      </Container>
      

    </section>
  
    
  );
};

export default About;

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
