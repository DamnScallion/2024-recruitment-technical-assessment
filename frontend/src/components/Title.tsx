import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

const Title: React.FC = () => {
  const [color, setColor] = useState('#1479f2')

  const handleTitleClick = () => {
    setColor((prevColor) => (prevColor === '#1479f2' ? 'red' : '#1479f2'))
  };

  return (
    <Box sx={{ mx: 2 }}>
      <Typography variant='subtitle1' gutterBottom>
        DevSoc presents
      </Typography>
      <Typography variant='h3' gutterBottom fontWeight={900}>
        <span 
          onClick={handleTitleClick} 
          style={{ color: color, cursor: 'pointer' }}
        >
          unilectives
        </span>
      </Typography>
      <Typography variant='subtitle2' gutterBottom fontWeight={900}>
        Your one-stop shop for UNSW course and elective reviews.
      </Typography>
    </Box>
  )
}

export default Title
