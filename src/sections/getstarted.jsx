import React from 'react';
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material';

import {Button } from 'theme-ui';
import Title from './Title';
import { Link } from 'components/link';
// img
import imgDetail from '../assets/images/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/images/pexels-pixabay-271816.jpg';


const Getstarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
      
        <Grid container spacing={{ xs: 4, sm: 14, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >

        
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
            
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                <br></br>
                <br></br>
                
                    <Title
                    text={
                        'Access Now Pay Later'
                    }
                    color={"#ffffff"}
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Let Extramile Africa helps you find a way to start or grow your business without taking cash loan in just few steps.
How customers access our Access Now, Pay Later offer in just 24hours- 5/6 simple steps.

Download the form/fill the form on our extramile.africa

Our/a sales partner/credit manager get in touch with him or her in less than 2mins after filling the form to ascertain what he wants and understanding his business and sales/biz performance

He pays the 30% upfront and gets invoice for the remaining balance.

He fills the disclaimer and agreement form and also fill our insurance partner form (if item spoil, or stolen, and damages and defuaults-penalties) go to do affidavit in a court of law for legal stamp duty and he send it via email or upload in our platform

He then indicates if he is ordering the item on our platform (via our partners) or get his his own suppler (if he has his own supplier, we contact the seller to ascertain the genuity and we see the deal payment deal with the seller or our partner) 

And wholla! That is it, He continues to use the asset and pay his way gradually into full-ownership with 6-12month period.
                    <br></br>
                    <br></br>
                    <Link path='/extracoop'>
                    <Button  >Join Now</Button>
                    </Link>
                    </CustomTypography> 
                </Box>
             
            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Access Now Pay Later'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Don't plunge more into debts, let Extramile Africa helps you refocus how you take loans for your business or home through Access Now Pay Later on Extracredit by Extramile Africa. Instead of taking cash loan, Access Now Pay Later gives you seamless access to non-consumable items, assets and hired-purchase financing.

                    Get Access to that equipment, working tools, home and office appliances, non-consumable and tangible items, make a 30% down-payment and spread the rest within 6-12months. With Access Now, Pay Later, you can make purchases and pay them off in installments over time, manage your cash flow more effectively. Instead of having
                     to pay for everything upfront, spread out your payments over several months. Extramile Africa 'Access Now Pay' Later make it easier to budget and ensure that you have enough money to cover all of your other expenses.
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link path='/extracoop'>
                    <Button  >Join Now</Button>
                    </Link>
                    </CustomTypography>
                    
                </Box>
            
            </CustomGridItem>
        </Grid>
      
    )
}
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
};

export default Getstarted;