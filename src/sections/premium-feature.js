/** @jsx jsx */
import { jsx, Box, Container, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import services from 'assets/images/services.png';
import { LearnMore } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';
import { Link } from 'components/link';


const data = [
  {
    title: ' ExtraCoop',
    contents: (
      <div>
        Credit-on-the-go to access instant solar-power to power your shops, schools, offices, farms, and homes.
        <br></br>
        Get Instant access on credit and pay back bit-by-bit without sweating.
        <br></br>

        <LearnMore label="Learn more" path="/extracoop" />
      </div>
    ),
  },
  {
    title: 'Extracredit- save and access upto X3 of your saving instantly',
    contents: (
      <div>
        Credit-on-the-go and pay-as-you-stock bit-by-bit for micro-enterprises within the informal market (mom & pop stores, 
        retail shops, input and commodities suppliers, POS centers etc).
        <br></br>
        If you own a small business, we don’t want you to close down your business again to go and queue at banks for loans or 
        run out-of-cash to restock- access our;
        Credit-on-the-go | Pay-as-you-stock | Pay back bit-by-bit.
        <br></br>
        <LearnMore label="Learn more" path="/extracoop" />
      </div>
    ),
  },
  {
    title: `Extrawealth- partner and collaborate with Extramile Africa to co-share Wealth`,
    contents: (
      <div>
        Obtenha seus exames de sangue entregues em vamos coletar uma amostra da vitória de
        os gerentes que fornecem as melhores diretrizes de sistema de design de todos os tempos.
        <br></br>
        <LearnMore label="Learn more" path="/extracoop" />
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={services} alt="services" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Extramile Africa everyday products and services"
              description="Extramile Africa has pivoted into a new faze in our advocacy; building Africa #1 alternative credit infrastructure and credit scores 
              for the underserved and lastmiles left in the cold for years. "
            />
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
          <SectionHeading
          sx={styles.heading}
          title="Extrawealth Access"
          description="With 50,000 naira and above (no limit), you become an automatic partner and collaborate with Extramile Africa after you must have joined ExtraCoop. On your contributions, you will be getting 5% every 3months or 25% ROI in a year if you like.  
          Check out our 5-Sigma Business Portfolios (Extramile Homes and Properties, Extrafarm- farming, Extrafarm- supply chain, Extraride, Extracredit offers- asset financing)."
        />
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
