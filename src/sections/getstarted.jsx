import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
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
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Let Extramile Africa helps you find a way to start or grow your business without taking cash loan in just 3 steps

                 Don't plunge more into debts, let Extramile Africa helps you refocus how you take loans for your business or home through Access Now Pay Later on Extracredit by Extramile Africa.

                    Instead of taking cash loan, Access Now Pay Later gives you seamless access to non-consumable items, assets and hired-purchase financing.
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
                    Get Access to that equipment, working tools, home and office appliances, non-consumable and tangible items, make a 30% down-payment and spread the rest within 6-12months.

                    With Access Now, Pay Later, you can make purchases and pay them off in installments over time, manage your cash flow more effectively. Instead of having to pay for everything upfront, spread out your payments over several months. 

                    Extramile Africa 'Access Now Pay' Later make it easier to budget and ensure that you have enough money to cover all of your other expenses.
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