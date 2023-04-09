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
import imgDetail from '../assets/images/acess.jpg';
import imgDetail2 from '../assets/images/access.jpg';


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
                    How customers access our Access Now, Pay Later offer in just 24hours.
                        <br></br>
                    <b>1.</b> Fill the Extracoop form <Link path='/extracoop'><b>Here</b></Link>
                    <br></br>
                    <b>2.</b>Our credit manager will get in touch with you within 24hrs after filling the form to ascertain your business performance

                    <br></br>
                    <b>3.</b>You the go ahead to pay 30% upfront of the actual price of the item you want to access.
                    <br></br>
                    <b>4.</b>An invoice for the remaining balance will be send to you 
                    <br></br>
                    <b>Note :</b> For you to be eligible for access now pay later, you will fill this three forms; Disclaimer, agreement and insurance form.
                    <br></br>
                    <b>5.</b> You then indicates if you're ordering the item on Extrastore  or  through your own supplier.
                    <br></br>
                    <b>6.</b> Extramile Africa then contact the supplier to ascertain the genuity of the item.
                    <br></br>
                    <b>7.</b> The supplier is then fully paid while you then spread your payment within 6-12 months as you continue to use the asset.

                    <br></br>
                    <br></br>
                    <Link path='/extracoop'>
                    <Button  >Join Now</Button>
                    </Link>
                    </CustomTypography> 
                </Box>
                <br></br>
                    <br></br>
            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
            <br></br>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                    borderRadius:"40px",
                    
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
                    borderRadius:"40px",
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
                        ' Why You Need Access Now Pay Later'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Don't plunge more into debts, let Extramile Africa helps you refocus how you take loans for your business or home through Access 
                    Now Pay Later on Extracredit by Extramile Africa.
                    <br></br>
                     Instead of taking cash loan, Access Now Pay Later gives you seamless access to non-consumable items, assets and hired-purchase financing.
                     <br></br>

                    Get Access to that <b>equipment, working tools, home and office appliances, non-consumable and tangible items</b>, make a 30% down-payment 
                    and spread the rest within 6-12months. 
                    <br></br>
                    With Access Now, Pay Later, you can make purchases and pay them off in installments over time, 
                    manage your cash flow more effectively. Instead of having
                     to pay for everything upfront, spread out your payments over several months. Extramile Africa 'Access Now Pay' Later make it easier 
                     to budget and ensure that you have enough money to cover all of your other expenses.
                    <br></br>
                    <iframe width="320" height="315" src="https://www.youtube.com/embed/wy25mcA8UyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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