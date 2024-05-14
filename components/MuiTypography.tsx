import React from 'react'
import {Typography} from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 heading</Typography>
        <Typography variant='h2'>H2 heading</Typography>
        <Typography variant='h3'>H3 heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>H4 heading</Typography>
        <Typography variant='h5'>H5 heading</Typography>
        <Typography variant='h6'>H6 heading</Typography>

        <Typography variant='subtitle1'>subtitle1</Typography> 
        {/* they are also h6 */}
        <Typography variant='subtitle2'>subtitle 2</Typography> 
        {/* they are also h6 */}

        <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, vel.
        </Typography>
        <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae maxime commodi voluptates magni nostrum eius!
        </Typography>
    </div>
  )
}

export default MuiTypography