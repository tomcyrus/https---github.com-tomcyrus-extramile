import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { jsx, Container, Grid,Button,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/extrawealth.jpg';
import { Link } from 'components/link';
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?cs=srgb&dl=pexels-pixabay-259751.jpg&fm=jpg'
        },
        {
            alt: 'image2',
            url: 'https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?cs=srgb&dl=pexels-andrea-davis-5411784.jpg&fm=jpg'
        },
        {
            alt: "image3",
            url: 'https://images.pexels.com/photos/356809/pexels-photo-356809.jpeg?cs=srgb&dl=pexels-daniel-frank-356809.jpg&fm=jpg'
        },
        {
            alt: "image4",
            url: 'https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?cs=srgb&dl=pexels-get-lost-mike-6267516.jpg&fm=jpg'
        },
        {
            alt: "image5",
            url: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg'
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
<section id="features" sx={styles.section}>
<br></br>
<br></br>
<br></br>
<br></br>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={messenger} alt="messenger" />
           
          </Box>
          
          <Box sx={styles.rightContent}>
            <SectionHeading
            //   emoji={emoji}
              sx={styles.heading}
              title="ExtraWealth"
              description="With 50,000 naira and above (no limit), you become an automatic partner and collaborate with Extramile Africa after you must have joined ExtraCoop. 
              On your contributions, you will be getting 5% every 3months or 25% ROI in a year if you like.  Check out our 5-Sigma Business Portfolios (Extramile Homes and Properties, 
              Extrafarm- farming, Extrafarm- supply chain, Extraride, Extracredit offers- asset financing)."
            />
            
            <Box sx={styles.accordionGroup}>
              {/* <Accordion items={data} /> */}
            </Box>
            <br></br> 
            <Box sx={styles.features}>
            <Link path="/wealthmember">
            <Button >Membership Form</Button>
            </Link>
            </Box>
          </Box>
          
        
        </Grid>
       
      </Container>
      
    </section>

          )
}

export default Gallery


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
      borderRadius:['20px'] ,
    },
    accordionGroup: {
      m: [null, null, null, '0 auto', 'unset'],
      maxWidth: [null, null, null, 600, 'none'],
    },
  };
  