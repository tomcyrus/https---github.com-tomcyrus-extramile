import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
      color:"#E6A740",
   }}
    >
      {text}
    </Typography>
  )
}

export default Title;