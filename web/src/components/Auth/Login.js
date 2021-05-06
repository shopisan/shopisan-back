import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Box } from '@material-ui/core';
import { login } from '../Utils/Auth';

export default function Login(props) {
    const {setSnackContent, setModalOpen} = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function submit(){
        login(username, password).then(response => {
            if (response === true){
                /**
                 * @todo afficher la snackbar + fermer le modal
                 * @todo s'assurer que les defaults d'axios soient bien set
                 */
                setModalOpen(false);
                setSnackContent({message: "You are now logged in", type: 'success'});
            }
            console.log("login response", response);
        })
        console.log(username, password);
    }
    
    return (
        <Box display="flex" flexDirection="column" style={{minHeight: "350px"}} justifyContent="space-around" >
            <TextField
                id="outlined-number"
                label="Number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(event) => {setUsername(event.target.value)}}
                variant="outlined"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                onChange={(event) => {setPassword(event.target.value)}}
                autoComplete="current-password"
                variant="outlined"
            />

            <Button variant="contained" color="primary" component="span" onClick={submit}>
                Submit
            </Button>
        </Box>
    )
}
