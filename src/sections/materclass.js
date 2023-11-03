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
import imgDetail from '../assets/images/become_rich.png';
import imgDetail2 from '../assets/images/invest.png';


const Masterclass = () => {

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
                
                    {/* <Title
                    text={
                        'Become Rich with Less (Start with little capital).& Become Rich doing less (Work just for few hours weekly) Pre-Masterclass. '
                    }
                    color={"#ffffff"}
                    textAlign={'start'}
                    justifyContent={'center'}
                    alignItems=''
                    /> */}
                    <CustomTypography>
                   <h2 style={{color:'red'}}> <b><center>Become Rich with Less (Start with little capital). 
                   &
Become Rich doing less (Work just for few hours weekly) Pre-Masterclass.</center> </b></h2>
<br/>
This Online Masterclass (Webinar) comes up on the <b> 9th of November, 2023</b> . Just 2hours, and you can never be stranded again. 

Hurry and register Here <b>  (it is a limited space for 30people)</b> .
<br/>
<br/>
<b style={{color:'red'}}> Time is 12-1.30pm.</b>
<br/>
<br/>
 You are about to learn;
<br/>
<br/>
How to be a deal breaker, deal closer and an investor and make lots of money while you sleep in just 30days- 
<br/>
<br/>
 <i>Only for people that hate going to work or working everyday </i>
 <br/>
<br/>

Today world no longer needs just only skilled people and business owners, it also needs inspiring investors, strong partnerships and deal closers if you want the skilled people and business owners to be in business and keep making money. 
<br/>
 <br/>
Investors and deal closers are the only people that create the opportunities and make tons of money available for skilled workers to keep working and business owners to keep being in business. 

As you might have seen in Nigeria or anywhere in the world, even government depends solely on driving investment from investors.
<br/>
             
                    <br></br>
                    <Link href='http://sbmasterclass9courses.extramile.africa/'>
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
                    height:'70%',
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
                        'How do you become an investor?'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Not necessarily by starting another business, it is simply by raising money from other investors, either retail or corporate and pilot/sail 
                    the investments into businesses to maximize profits and create jobs for others.
                    <br></br> <br/>

                    <b>How do you raise money from investors? </b>
                     <br></br> <br/>


                     Simply by learning the art from those that have raised money from investors. 
<br/>
<br/>
Reason why I am inviting you  to my rich Free webinar (pre-masterclass) with SpeakerBankole.
<br/> <br/>
My name is Bankole Olalekan. I am a serial investor and growth consultant that have raised millions in Real Business and Investment portfolios, from Agribusiness, commodities supply chain, E-commerce, Fintech offerings, Media and creative industry, export, logistics, Cow Fattening and Real Estate.
<br/> <br/> <br/>
Rush and register today for this Free webinar by clicking the link below if you want to elevate your business skills in just 30days.
<br/> <br/>
Kindly note that this webinar coming up on<b> 9th November 2023</b> is for this 4 set of people:
<br></br><br></br>
<b>1.</b> You want to quit the rat-race of life
<br></br>
<b>2.</b> You hate everyday 9-5 work-life and desire balance in your life
<br></br>
<b>3.</b>  You desire and love financial growth & abundance and you want to go beyond just being an employee or owning a business to becoming a serial entrepreneur and Investor
<br></br>
<b>4.</b> You want to create series of investment/business portfolios that will keep making money for you while you sleep.
<br></br> <br/>
If you fall into any of the four category, I will expose you to how to personalize wealth creation faster and smarter.

Click the link below and register today.
                    <br></br>
                    <br/>
                  
                    <Link href='http://sbmasterclass9courses.extramile.africa/'>
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

export default Masterclass;