import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
// import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/images/unlock.png';
import { motion } from "framer-motion";

const Header = () => {

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
                   Unlock your membership on ExtraCoop by Extramile Africa
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                   Join Toke and other thousands of Africans and unlock your Extrawealth and Extracredit access to loads of offerings and benefits
                </Typography>

                
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
            <motion.div
          animate={{
            x:-10,
            opacity:1
          }}
          initial={{
            opacity:0.1
          }}
          transition={{
            type:"spring",
            stiffness:60,
            damping:100
          }}
          >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: -15,
                }}
                />
                </motion.div>
            </Box>

        </CustomBox>
    )
}

export default Header