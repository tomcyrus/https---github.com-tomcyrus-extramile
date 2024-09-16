import React from 'react'
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import utilities from 'assets/images/icons/utilities.png';
import home from 'assets/images/icons/home.png';
import farmland from 'assets/images/icons/farmland.png';
import ride from 'assets/images/icons/ride.png';
import power from 'assets/images/icons/power.png';
import care from 'assets/images/icons/care.png';
import smes from 'assets/images/icons/sme.png';
import SectionHeading from 'components/section-heading';
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Content = () => {
  return (    
        <Grid container spacing={0}   
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10,
            px: 2,
        }}
        >
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid item xs={12} sm={12} md={5}
            component = 'section'
            >
                <Title
                text={
                    'Our available products:'
                }
                textAlign={'start'}
                />

                <Typography 
                variant='h6'
                component='h4' 
                sx = {{
                    fontWeight: '400',
                    paddingTop: 1,
                }}
                >
                    Non Consumable Products
                </Typography>

                <Paragraph 
                text={
                    ' We have hundreds of products for you to explore and access.'
                }
                maxWidth = {'75%'}
                mx={0}
                textAlign={'start'}
                />
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: '1px solid #FFC059',
                }}>
                    <CardContent>
                        <IconButton>
                        <a href ="https://closa.extramile.africa/store/category/extramiles-homes-and-property-10">
                        <SectionHeading
                             emoji={home}
                            />
                            </a>
                            
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                       Extramile Homes & Properties
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #FFC059'
                }}>
                    <CardContent>
                        <IconButton>
                            {/* <LocalParkingIcon 
                            fontSize="large"
                            color="secondary" /> */}
                <a href ="https://closa.extramile.africa/store/category/extra-ride-6">
                            <SectionHeading
                             emoji={ride}
                            />
                            </a>
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        ExtraRide
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
           
           

            <Grid item xs={12} sm={6} md={2}
            sx={{
                display: {xs: 'none', sm: 'block'},
            }}  
            >
                <Card 
                square={ true }
                sx={{ 
                    boxShadow: 'none',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>

                    <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        Start Exploring
                        </Typography>

                    <CardContent>
                        <ArrowCircleRightRoundedIcon
                        fontSize="large"
                        color="primary" />
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>    
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #FFC059'
                }}>
                    <CardContent>
                        <IconButton>
                            {/* <FastfoodOutlinedIcon
                            fontSize="large"
                            color="#FFC059" /> */}
                            <a href ="https://closa.extramile.africa/store/category/extra-utilities-1">
                            <SectionHeading
                             emoji={utilities}
                            />
                            </a>
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        ExtraUtilities
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    border: '1px solid #FFC059',
                }}
                >
                    <CardContent>
                        <IconButton>
                            {/* <PoolOutlinedIcon 
                            fontSize="large"
                            color="secondary" /> */}
                            <a href ="https://closa.extramile.africa/store/category/extra-care-4">
                            <SectionHeading
                             emoji={care}
                            />
                            </a>
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        ExtraCare
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #FFC059',
                }}>
                    <CardContent>
                        <IconButton>
                            {/* <WifiPasswordIcon
                            fontSize="large"
                            color="secondary" /> */}
                            <a href ="https://closa.extramile.africa/store/category/extra-farm-3">
                            <SectionHeading
                             emoji={farmland}
                            />
                            </a>
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        ExtraFarm
                        </Typography>
                    </CardContent>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #FFC059',
                }}>
                    <CardContent>
                        <IconButton>
                            {/* <WifiPasswordIcon
                            fontSize="large"
                            color="secondary" /> */}
                            <a href ="/">
                            <SectionHeading
                             emoji={smes}
                            />
                            </a>
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        SMEs ExtraPark
                        </Typography>
                    </CardContent>
                </Card>
            </Grid> 
            <Grid item xs={12} sm={6} md={3}>
                <Card 
                square={ true }
                sx={{ 
                    minHeight: 200,
                    display: 'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center', 
                    border: '1px solid #FFC059',
                }}>
                    <CardContent>
                        <IconButton>
                            {/* <WifiPasswordIcon
                            fontSize="large"
                            color="secondary" /> */}
                            <a href ="https://closa.extramile.africa/store/category/extra-power-7">
                            <SectionHeading
                             emoji={power}
                            />
                            </a>
                        
                        </IconButton>
                        <Typography 
                        variant="h5" 
                        component="p"
                        sx={{
                            fontWeight: 700,
                            textTransform: 'capitalize',
                        }}
                        >
                        ExtraPower
                        </Typography>
                    </CardContent>
                </Card>
            </Grid> 
        </Grid>
    );
}

export default Content