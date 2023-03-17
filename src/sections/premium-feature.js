/** @jsx jsx */
import { jsx, Box, Container, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import services from 'assets/images/services.png';
import { LearnMore } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';
import { Link } from 'components/link';
import { motion } from "framer-motion";


const data = [
  {
    title: 'Extracoop Membership Access',
    contents: (
      <div>
        Unlock your Credit-on-the-go with your Extracoop membership to access Extracredit (Access Now, Pay Later) 
        and Extrawealth (Extramile Africa 5-Sigma Business Portfolio Partnership). Become a member of 
        Extramile Cooperative - Extracoop today to power your shops, schools, offices, farms, and homes.
        <br></br>
        Get Instant access on credit and pay back bit-by-bit without sweating.

        <LearnMore label="Learn more" path="/extracoop" />
      </div>
    ),
  },
  {
    title: 'Extracredit Access',
    contents: (
      <div>
        <b>A.</b>Access Now Pay Later- You pay just 30% on any of the products you pick from any supplier of your choice or buy on our marketplace- Extrastore by Extramile Africa, and spread your payment accordingly within 6-12months depending on your plan
         
        <br></br>
       <b> B.</b>Access upto X3 credit (loans) on your savings in 3months- with Extracredit, you can do flexible savings for 3months and get upto X3 credit facilities on your savings.
        <LearnMore label="Learn more" path="/extracoop" />
      </div>
    ),
  },
  // {
  //   title: `Extrawealth Access`,
  //   contents: (
  //     <div>
  //       With 50,000 naira and above (no limit), you become an automatic partner and collaborate with Extramile Africa after you must have joined ExtraCoop. 
  //       On your contributions, you will be getting 5% every 3months or 25% ROI in a year if you like.  Check out our 5-Sigma Business Portfolios 
  //       (Extramile Homes and Properties, Extrafarm- farming, Extrafarm- supply chain, Extraride, Extracredit offers- asset financing).
  //       <br></br>
  //       <LearnMore label="Learn more" path="/extracoop" />
  //     </div>
  //   ),
  // },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
          <motion.div
          animate={{
            x:0,
            opacity:1
          }}
          initial={{
            opacity:0.1
          }}
          transition={{
            type:"spring",
            stiffness:60,
            damping:45
          }}
          >
            <Image src={services} alt="services" />
            </motion.div>
          </Box>
          <Box sx={styles.rightContent}>
          <Link  path="/extracoop">
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Extramile Africa Everyday Products And Services"
              description="Extramile Africa has pivoted into a new faze in our advocacy for deepening financial inclusion; 
              building Africa #1 alternative credit infrastructure and credit scores for the underserved and lastmiles left in the cold for years via Access Now Pay Later.
              
              "
            />
            </Link>
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
            <br></br> 
            <center>
            <Link path="/extracoop">
            <Button >Join ExtraCoop today</Button>
            </Link>
            </center>
          </Box>
          {/* <SectionHeading
          sx={styles.heading}
          title="Extrawealth Access"
          description="With 50,000 naira and above (no limit), you become an automatic partner and collaborate with Extramile Africa after you must have joined ExtraCoop. On your contributions, you will be getting 5% every 3months or 25% ROI in a year if you like.  
          Check out our 5-Sigma Business Portfolios (Extramile Homes and Properties, Extrafarm- farming, Extrafarm- supply chain, Extraride, Extracredit offers- asset financing)."
        /> */}
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
