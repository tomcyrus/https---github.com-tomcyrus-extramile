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

];

const Extra = () => {
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
           
          </Box>
 
        </Grid>

        
{/* ////////////////////////////  2  //////////////////////// */}
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
           
          </Box>
          
        </Grid>


{/* ////////////////////////////  2  //////////////////////// */}
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
           
          </Box>
          
        </Grid>

{/* ////////////////////////////  2  //////////////////////// */}
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
           
          </Box>
          
        </Grid>

        
      </Container>
      
    </section>
  );
};

export default Extra;

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
