/** @jsx jsx */
import { jsx, Box, Container, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/academy.png';
import { Link } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';



const data = [
  {
    title: ' Academy',
    contents: (
      <div>
        Credit-on-the-go to access instant solar-power to power your shops, schools, offices, farms, and homes.
        <br></br>
        Get Instant access on credit and pay back bit-by-bit without sweating.
        <br></br>

       
      </div>
    ),
  },
  
];

const Academy = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={messenger} alt="messenger" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
            //   emoji={emoji}
              sx={styles.heading}
              title="Extramile Business Development Academy"
              description="You don't want to miss the fantastic business courses on Extramile Academy "
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
            <br></br> 
            <center>
            <Link path="/go">
            <Button >Join Now</Button>
            </Link>
            </center>
          </Box>
          <SectionHeading
          sx={styles.heading}
          title="Join Closa by Extramile Today"
          description="Joining ExtraCoop will also gives you the ample opportunity to partner and collaborate with us 
          and earn 5% ROI on your money every 3months for 2years."
          
        />
        
        </Grid>
        <center>
            <Link path="/closa">
            <Button >Join Closa</Button>
            </Link>
            </center>
      </Container>
      
    </section>
  );
};

export default Academy;

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
