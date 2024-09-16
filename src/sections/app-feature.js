/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container,Button, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import app from 'assets/images/shop.png';
import emoji from 'assets/images/icons/emoji.png';
import check from 'assets/images/icons/check-circle.png';
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    label: 'ExtraPower',
  },
  {
    id: 2,
    label: 'ExtraB-support',
  },
  {
    id: 3,
    label: 'ExtraFarm',
  },
  {
    id: 4,
    label: 'ExtraCare',
  },
  {
    id: 5,
    label: 'Extramile Homes and Properties',
  },
  {
    id: 6,
    label: 'ExtraRide',
  },
  {
    id: 7,
    label: 'ExtraUtilities',
  },
];

const AppFeature = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="ExtraStore Access"
              description="On Extrastore, you have access to non-consumable products and value-added services on our catalogs on credit 
              (Access Now Pay Later), fill a simple form and a customer relationship rep will jump on a call with you to deliver your orders.
               Here, you can either pay at once to enjoy discounted or jump on our exciting value-added services of Save Now Buy Later and unlock 
               our 20% cashback on your purchase (you don't need to be a member of ExtraCoop if you are paying at once) or pay on instalment after
                paying 30% initial payment. (Categories of products on Extrastore include :" />
           

            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Image src={check} alt="check icon" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
           
          <br></br>
         
            <Text as="p">
            Buy anything on credit and jump on our Access Now, Pay Later offerings
            </Text>
           <br></br> 
           <a href="https://www.closa.extramile.africa/store">
            <Button >Buy Now On Discount</Button>
            </a>
            <br></br>
         
          </Box>
          
          <Box sx={styles.illustration}>
          <motion.div
          animate={{
            x:175,
            opacity:1
          }}
          initial={{
            opacity:0.1
          }}
          transition={{
            type:"spring",
            stiffness:60,
            damping:100
          }}
          >
            <Image src={app} alt="workHard" />
          </motion.div>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default AppFeature;

const styles = {
  section: {
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['auto', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', null, null, '36px', '31px', 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: '-1px',
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: [24, null, null, 30, 25, null, '100%'],
      top: ['4px', '8px', null, null, '4px', '8px'],
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        maxWidth: 35,
      },
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  illustration: {
    mb: [0, null, null, null, '-150px', '-260px'],
    mt: [0],
    zIndex: '-1',
    img: {
      display: ['none', null, null, null, 'block'],
    },
    '@media screen and (max-width: 767px)': {
      background: `transparent url(${app}) no-repeat center top / cover`,
      width: '100%',
      minHeight: 310,
      marginBottom: 40,
    },
  },
};
