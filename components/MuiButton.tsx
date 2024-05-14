import React from 'react'
import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const MuiButton = () => {
    return (

        <Stack spacing={6} direction='row'>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://github.com/Positiveoo1'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>Primary</Button>
                    <Button variant='text' color='error'>Error</Button>
                    <Button variant='outlined' color='warning'>Warning</Button>
                    <Button variant='contained' color='info'>Info</Button>
                    <Button variant='contained' color='success'>Success</Button>
                </Stack>

                <Stack display='block' spacing={0} direction='row'>
                    <Button variant='contained' size='small'>S</Button>
                    <Button variant='contained' size='medium'>M</Button>
                    <Button variant='contained' size='large'>L</Button>
                </Stack>

                {/* <Stack spacing={8} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>} disableElevation>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} disableRipple>Send</Button>
    </Stack> */}

                <IconButton aria-label='send' color='info'>
                    <SendIcon />
                </IconButton>

                <Stack direction='row'>
                    <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' arial-label='alignment button group'>
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </Stack>


    )
}

export default MuiButton