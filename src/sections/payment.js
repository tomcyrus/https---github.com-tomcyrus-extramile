
import React,{useState, useEffect,useCallback} from "react";
import { keyframes } from '@emotion/core';/** @jsx jsx */
import { jsx, Box, Grid, Container, Flex,Heading, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';
import { Link } from 'components/link';
import Image from 'components/image';
import support from 'assets/images/support.png';
import rightArrow from 'assets/images/icons/right-arrow.png';



const paymentdetails = [
  {
    id: 1,
    icon: support,
    title: 'Subscription Payment Methods',
    description: `Pay the sum of NGN 3,500 only into the account details, after successful transaction click on the button below to confirm payment.`,
    
  },
  {
    id: 2,
    icon: support,
    title: 'Subscription Payment Methods',
    description: `Account Number : 1016308218 
    \nAccount Name  : Extrafin Advisory Technologies
    \nBank Name : Zenith Bank \n `,
  },

];




const data = [
  {
    id: 1,
    title: 'Extrawealth Membership',
    subtitle: 'One Time Payment',
   
    amount: {
      monthly: 3500,
     
    },
    isRecommended: false,
    // buttonText: 'Subscribe Now',
 
    
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Automatic Partnership',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Collaboration With Extramile Africa`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Enjoy Up To 25% P.A`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Access To Our 5-Sigma Portfolios`,
      },
    ],
  },
  
  
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };


  return (
    <Box as="section" id="pricing" sx={styles.section1}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What business suits you perfectly"
          description="Discover our Membership plans"
        />
        
        <Box sx={styles.priceWrapper}>
          <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
        </Box>
        
        <center>
        <Box as="section" id="support" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          {paymentdetails?.map((item) => (
            <Flex key={item.id} sx={styles.supportItem}>
              <Flex as="figure" sx={styles.media}>
                <Image src={item?.icon} alt={item?.title} />
              </Flex>
              <Box sx={styles.content}>
                {/* <Heading>
                  {item?.title} <Image src={rightArrow} alt="rightArrow" />
                </Heading> */}
                <Text as="p">{item?.description}</Text>
              </Box>
              

            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
</center>
<center>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSVRs4ZYdo8Oo9le5SCBmgT42NAsFDiwjrBPzSyzOIfUXS8Q/viewform?embedded=true" width="370" height="427" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</center>
<Box sx={styles.features}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSVRs4ZYdo8Oo9le5SCBmgT42NAsFDiwjrBPzSyzOIfUXS8Q/viewform?embedded=true">
            <Button >Membership Form</Button>
            </a>
            </Box>
 <center>
       
       <Text as="p">Send Payment Proof</Text>
       <Grid sx={styles.grid2}>
       
           <Heading> <Image src={rightArrow} alt="rightArrow" />
                </Heading>
       <a href="https://api.whatsapp.com/send?phone=+2348036028454">
       <Button  >Confirm Payment</Button>
       </a>
       </Grid>
      
       
       </center>
       <br></br>
<center>
  <Grid sx={styles.grid2}>
  <a href="https://api.whatsapp.com/send?phone=+2348036028454">
   <Button > Extrawealth </Button>
   </a>
   
   <a href="https://api.whatsapp.com/send?phone=+2348036028454"> 
  <Button >Extracredit</Button> 
  </a>
 
  <a href="https://www.closa.extramile.africa/store">
  <Button  >Extrastore </Button>
  </a> 
  </Grid>
  </center>     

              
   

      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {

  section: {
    pt: [9, null, null, 10, 11, 11, 11],
    pb: [7, null, null, 8, null, 9, 10],
  },
  grid: {
    gap: ['30px 30px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      null,
      'repeat(2, 540px)',
    ],
  },
  grid2: {
    gap: ['20px 20px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(3, 180px)',
    ],
  },
  supportItem: {
    backgroundColor: '#F6F8FB',
    borderRadius: 7,
    flexDirection: ['column', null, null, null, null, 'row'],
    alignItems: 'flex-start',
    p: ['25px 25px 20px', null, null, null, '35px 30px', '45px 40px 50px'],
    transition: '0.3s ease-in-out 0s',
    ':hover': {
      backgroundColor: 'white',
      boxShadow: '0px 15px 60px rgba(63, 90, 130, 0.12)',
    },
  },
  media: {
    alignItems: 'center',
    mr: [6],
    mb: [5, null, null, null, null, 0],
    minWidth: [80],
    img: {
      maxWidth: [60, null, null, null, null, '100%'],
    },
  },
  content: {
    mt: ['-7px'],
    h2: {
      fontWeight: 700,
      fontSize: [2, null, null, null, 4],
      lineHeight: 1.5,
      color: 'textSecondary',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    p: {
      fontSize: [1, null, null, null, 15],
      lineHeight: [2.13],
      color: 'headingSecondary',
      mt: [3],
    },
  },





  section1: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
