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
                    <Title
                    text={
                        'We make it easy for tenants and landlords'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Listing are updated continuously so you<br />
                        won't miss out on homes that just hit<br />
                        market until you find your perfect home.
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
                        'Match with the best agent'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Our verified partner Agents are local experts who<br /> 
                        earn an average of 4.8/5 stars from buyers and sellers.
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