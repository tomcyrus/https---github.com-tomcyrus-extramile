
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';/** @jsx jsx */
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import PriceTables from 'components/cards/price-tables';
import Switch from 'components/switch';
import { Link } from 'components/link';


const data = [
  {
    id: 1,
    title: 'Extrawealth',
    subtitle: 'One Time Payment',
   
    amount: {
      monthly: 3500,
     
    },
    isRecommended: false,
    buttonText: 'Subscribe Now',
    readMore: '/wealthmember',
 
    
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
      // {
      //   id: 5,
      //   isAvailable: false,
      //   title: `Baixe e imprima cursos e exercícios em PDF`,
      // },
    ],
  },
  {
    id: 2,
    title: 'Extracredit',
    subtitle: 'One Time Payment',
    amount: {
      monthly: 3500,
   
    },
    isRecommended: true,
    buttonText: 'Subscribe Now',
    readMore: '/coopmember',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Access To Our Credit Infrastructure ',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Access Up To X3 Credit (Loans) On Your Savings In 3 Months`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Access To Our 'Access Now Pay Later' Services`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Access To Non-Consumable Products And Value-Added Services (VAS)`,
      },
      // {
      //   id: 5,
      //   isAvailable: true,
      //   title: `Baixe e imprima cursos e exercícios em PDF`,
      // },
    ],
  },
];
  

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (

    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What Business Suits You Perfectly"
          description="Discover Our Extracoop Membership Plans"
        />
       {/* <Grid sx={styles.grid2}> */}
        {/* <Link path={price.readMore}> */}
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
        {/* </Link> */}

        {/* <Link path="/coopmember">
        <Box sx={styles.priceWrapper}>
          <Box sx={styles.priceWrapper}>
          {datas?.map((price, index) => (
            
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
        </Box>
        </Link> */}
        {/* </Grid> */}
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

  // grid2: {
  //   gap: ['20px 20px'],
  //   justifyContent: 'center',
  //   gridTemplateColumns: [
  //     'repeat(1, 1fr)',
  //     null,
  //     null,
  //     'repeat(2, 2fr)',
  //     null,
  //     'repeat(2, 180px)',
  //   ],
  // },
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
