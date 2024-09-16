import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
// import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/images/pexels-binyamin-mellish-186078.png'
import snbl from 'assets/images/savenow2.png';

const SaveHeader = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'orange',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (

        <CustomBox component='header'>
            {/*  Box text  */}
            
            <BoxText 
            component='section'
            >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
                <Typography
                variant='h3'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                }}
                >
                    Save Now Buy Later
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >Our Save Now, Buy Later product is designed to help you avoid debt and achieve your financial goals. By saving money in advance for a future purchase, you can make that purchase with confidence and without the stress of high interest rates. You also get to enjoy a wooping 20% cashback.
                Beat inflation with Save Now, Buy Later
                </Typography>

                <Box>
                    {/* <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        buy now
                    </Button> */}
                    {/* <Button 
                    // component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        explore
                    </Button> */}
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={snbl}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: -15,
                    borderRadius:"45px",
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default SaveHeader