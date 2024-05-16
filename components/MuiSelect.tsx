import React from 'react'
import {Box, TextField, MenuItem, Stack} from '@mui/material'
import {useState} from 'react'
const MuiSelect = () => {
    const [country, setCountry] = useState('')
    console.log({country})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setCountry(event.target.value as string)
    }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
 <Box width="250px" >
        <Stack spacing={2} direction='column'>
        <TextField variant='filled' label='select country' select value={country} onChange={handleChange} fullWidth
            helperText="Please select your country"
            color='success'
            size='medium'
            required
        >
        <MenuItem value='Uzb'>Uzb</MenuItem>
        <MenuItem value='Palestine'>Palestine</MenuItem>
        <MenuItem value='Turkey'>Turkey</MenuItem>
        </TextField>

        <TextField variant='filled' select label='Your city'
         color='success' 
         size='medium' 
         helperText='Please select your below city'
         required

         >
            <MenuItem value='Tashkent'>Tashkent</MenuItem>
            <MenuItem value='Gaza'>Gaza</MenuItem>
            <MenuItem value='Ankara'>Ankara</MenuItem>
        </TextField>
        <TextField variant='filled' select label='Your Citizenship'
         color='success' 
         size='medium' 
         helperText='Please select your citizenship'
         required

         >
            <MenuItem value='uzb'>Uzb</MenuItem>
            <MenuItem value='pal'>Palestine</MenuItem>
            <MenuItem value='turkey'>Turkey</MenuItem>
        </TextField>
        </Stack>
        
    </Box>
    </Box>
   
  )
}

export default MuiSelect