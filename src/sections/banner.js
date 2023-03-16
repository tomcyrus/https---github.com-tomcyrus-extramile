/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text, Button, Label } from 'theme-ui';
import { rgba } from 'polished';
import Image from 'components/image';
import SubscriptionForm from 'components/subscription-form';
import illustration from 'assets/images/banner.png';
import eflna from 'assets/images/ban1.png';
import tef from 'assets/images/ban2.png';
import zenith from 'assets/images/ban3.png';
import { Link } from 'components/link';
import {motion} from 'framer-motion';


const logos = [
  {
    name: 'eflna',
    src: eflna,
  },
  {
    name: 'tef',
    src: tef,
  },
  {
    name: 'zenith',
    src: zenith,
  },
];

const sentence={
  hidden:{opacity:0.01, y:90},
  visible:{
    opacity:1,
    y:0,
    transition:{
      delay:0.8,
      type:"spring",
      staggerChildren:0.88,
    },

  
  },
}

const letter={
  hidden:{opacity:0.01, y:90},
  visible:{
    opacity:1,
    y:6,
    transition:{
      delay:0.2,
      type:"spring",
      staggerChildren:0.88,
    },

  
  },
}

const img={
  hidden:{opacity:0.01, y:90},
  visible:{
    opacity:1,
    y:6,
    transition:{
      duration: 0.3, 
      delay:1,
      type:"spring",
      staggerChildren:0.88,
    },

  
  },
}

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">
            <motion.h1
            className='load-screen--message'
            variants={letter}
            initial="hidden"
            animate="visible"
           
            >

            ExtramileAfrica
            </motion.h1>
            </Heading>
            <Text as="p">
            <motion.p 
            variants={sentence}
            initial="hidden"
            animate="visible"
          

             >
             
            Extramile Africa offers Access Now Pay Later to help underserved consumers and MSMEs in Africa access and use non-consumable items on credit, with a 30% down-payment and spread payment over a period of time, while they gain full ownership of the asset.
            </motion.p>
            </Text>
            <br></br>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{scale : 1.1}}
              
  >
            <Link path="/anpl">
            <Button >Get Started</Button>
            </Link>
            </motion.div>
            {/* <SubscriptionForm sx={styles.subscriptionForm} /> */}
            <Flex sx={styles.sponsoredBy}>
              <Text as="span">Partners:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Flex sx={styles.sponsor}>
                {logos?.map((logo, index) => (
                  <Flex as="figure" key={index}>
                    <Image src={logo.src} alt={logo.name} />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Box>
          <motion.span
           whileHover={{scale : 1.2}}
           transition ={{duration: 0.3}}
           initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          variants={img}
         
            >
          <Flex as="figure" sx={styles.bannerImage}>
          
            <Image src={illustration} alt="illustration" />
          </Flex>
          </motion.span>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: '#a5d6a73b',
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
  },
  contentWrapper: {
    gap: ['50px 50px'],
    display: ['block', null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '0.95fr 1.05fr'],
    alignItems: 'center',
    minHeight: ['auto', null, null, null, '38vh', '100vh'],
    pt: [null, null, null, 8, 0, 9, null],
    '@media only screen and (min-width:1900px)': {
      pt: 10,
    },
  },
  bannerContent: {
    margin: [null, null, null, '0 auto', 0],
    maxWidth: [null, null, null, 600, 'none'],
    textAlign: [null, null, null, 'center', 'left'],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 14],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: 'textSecondary',
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: 'textSecondary',
      maxWidth: [470],
      m: [null, null, null, '30px auto', 0],
      mt: [3, null, null, null, 5],
    },
  },
  subscriptionForm: {
    maxWidth: [null, null, null, 470, 'none'],
    m: [null, null, null, '30px auto', '30px 0 0'],
    mt: [6],
    input: {
      backgroundColor: '#FFFFFF',
      border: '0 none',
      fontFamily: 'body',
      fontSize: [1, null, null, null, 2],
      px: [5],
      boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      '::placeholder': {
        color: rgba('#02073E', 0.4),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: 'center',
    maxWidth: [null, null, null, 470, 'none'],
    m: [null, null, null, '30px auto', '30px 0 0'],
    mt: [6],
    span: {
      fontSize: ['13px', null, null, null, 2],
      lineHeight: 2.62,
      color: rgba('#566272', 0.6),
    },
  },
  sponsor: {
    alignItems: 'center',
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ['60px', null, null, null, '80px', '100%'],
      },
    },
  },
  bannerImage: {
    alignItems: 'center',
    mt: [9, null, null, null, 0],
    img: {
      maxWidth: [null, null, null, '80%', '100%'],
      m: [null, null, null, '0 auto', 0],
    },
  },
};
