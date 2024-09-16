/** @jsx jsx */
import { jsx, Box, Container, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import community from 'assets/images/community.png';
import { Link } from 'components/link';
import emoji from 'assets/images/icons/emoji.png';



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

const Community = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          
          <SectionHeading
          sx={styles.heading}
          title="Get Free Access to our Community- Closer by Extramile Africa"
          description="Join our community of Closer by Extramile Africa today and start earning money with us
          Extramile Africa leverage on the power of our community to drive repeated growth via referrals, distribution channels and Affiliate Partners and associates. 
        Join us and earn passive income."
          
        />
        <Box as="figure" sx={styles.illustration}>
            <Image src={community} alt="community" />
            {/* <iframe width="320" height="315" src="https://www.youtube.com/embed/zzC9YhYbUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </Box>
        
        </Grid>
        <center>
            <a href="https://www.closa.extramile.africa">
            <Button >Join Closer</Button>
            </a>
            </center>
      </Container>

      <section id="features" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            {/* <Image src={snbl} alt="snbl" /> */}
            <iframe width="320" height="315" src="https://www.youtube.com/embed/z4lkzOVf66o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           
          </Box>
          
          <Box sx={styles.rightContent}>
            <SectionHeading
            //   emoji={emoji}
              sx={styles.heading}
              title="Extra Home and Properties"
              description="Affordable lands and properties in high-valued locations like Ibeju-Lekki and Epe, Lagos: Extramile Homes and Properties powered by RENTALS by Extramile Africa. Buy Now and Pay Small Small"
            />
            
            <Box sx={styles.accordionGroup}>
              {/* <Accordion items={data} /> */}
            </Box>
            <br></br> 
            <center>
            <a href="https://closa.extramile.africa/store/category/extramiles-homes-and-property-10">
            <Button >Join Now</Button>
            </a>
            </center>
          </Box>
          
        
        </Grid>
       
      </Container>
      
    </section>
      
    </section>

    
  );
};

export default Community;

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
