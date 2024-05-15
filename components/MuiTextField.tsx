import {Stack, TextField} from '@mui/material'
const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined'/>
                <TextField label='Name' variant='filled'/>
                <TextField label='Name' variant='standard' color='success'/>
            </Stack>
            <Stack spacing={2} direction='row'  >
                <TextField label='Surname' variant='filled' size='small' required color='secondary'/>
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField helperText='Do not share your password' label='password' color='success' type='password' disabled/>
                <TextField label='readOnly' InputProps={{readOnly: true}}/>
            </Stack>
        </Stack>
    )
}
export default MuiTextField