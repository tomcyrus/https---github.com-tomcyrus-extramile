/** @jsx jsx */
import { jsx, Box, Container, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import extrawealth from 'assets/images/extrawealth.png';
import { Link } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';
import { motion } from "framer-motion";



const data = [
  {
    title: '',
    contents: (
      <div>
        Success in business and career requires lots of learning, most especially in-demand skillsets require to upscale and reskill you or employees in today digital economy. 
        <br></br>
        Extramile Africa unlock the access to Extramile Business Development Academy courses to enable you get knowledge-specifics at affordable fees.
        <br></br>

       
      </div>
    ),
  },
  
];

const Academy = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
     
      <SectionHeading
          sx={styles.heading}
          title="Value Added Services (VAS)"
          // description="Discover our Membership plans"
        />
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            {/* <Image src={messenger} alt="messenger" /> */}
            <iframe width="320" height="315" src="https://www.youtube.com/embed/jBxJ7yVgb9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Box>
          
          <Box sx={styles.rightContent}>
            <SectionHeading
            //   emoji={emoji}
              sx={styles.heading}
              title="Extramile Business Development Academy"
              description="With Extramile Africa, it is all about giving you seamless digital financial inclusion Access to transmit you from Little to More... "
            />
            
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
            <br></br> 
            <center>
            <a href="https://biz-academy.extramile.africa">
            <Button >Join Now</Button>
            </a>
            </center>
          </Box>
          <SectionHeading
          sx={styles.heading}
          title="Save Now Buy Later"
          description="Our Save Now, Buy Later product is designed to help you avoid debt and achieve your financial goals. By saving money in advance for a future purchase, you can make that purchase with confidence and without the stress of high interest rates. You also get to enjoy a wooping 20% cashback.
          Beat inflation with Save Now, Buy Later"
          
        />
         <motion.span

           
                whileHover={{ scale: 1.1 }}
>
        <Box as="figure" sx={styles.illustration}>
            <Image src={extrawealth} alt="extrawealth" />
            {/* <iframe width="320" height="315" src="https://www.youtube.com/embed/zzC9YhYbUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </Box>
          </motion.span>
        </Grid>
        <center>
        <Link path="/snbl">
            <Button >Save Now</Button>
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
