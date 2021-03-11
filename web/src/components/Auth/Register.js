import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Box, Container } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import setAxiosDefaults from '../Utils/Common';
import TopMenu from './../Layout/TopMenu'
import { getErrors } from '../Utils/FormsUtils';
setAxiosDefaults(axios);

let errors = {};

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showSuccess, setShowSuccess] = useState(false)
    const forceUpdate = useForceUpdate();

    function submit() {
        if (checkPassword()) {
            axios.post("/api/register/", {
                username,
                password,
                email
            }).then((response, error) => {
                if (response.success) {
                    errors = {}
                    setShowSuccess(true)
                    // @todo afficher msg de success + rediriger, ou juste cacher le form avec instructions
                } else {
                    errors = response.data;
                    forceUpdate();
                }
                // console.log(response);
            });
        }

        /**
         * @todo faire la requete en back ++ setUser et save le token
         *      ++ Changer la facon de faire le bearer (voir doc Django)
         */
    }

    function checkPassword(event) {
        if (repeatPassword !== password) {
            errors.repeat_password = ["Passwords do not match"];
            forceUpdate();

            return false;
        } else {
            delete errors.repeat_password
            forceUpdate();
        }

        return true;
    }

    useEffect(() => {
        checkPassword();
        forceUpdate();
        return () => {

        }
    }, [repeatPassword])

    function handleClose() {
        setShowSuccess(false)
    }

    return (
        <div>
            <Container maxWidth="sm" style={{ alignSelf: 'center', justifySelf: 'center', paddingTop: '20vh' }}>
                <Snackbar open={showSuccess} autoHideDuration={10000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>
                <Box display="flex" flexDirection="column" style={{ minHeight: "350px" }} justifyContent="space-around" >
                    <TextField
                        id="username"
                        label="Username"
                        onChange={(event) => { setUsername(event.target.value) }}
                        variant="outlined"
                        {...getErrors('username')}
                    />
                    <TextField
                        id="email"
                        type="email"
                        label="Email address"
                        onChange={(event) => { setEmail(event.target.value) }}
                        variant="outlined"
                        {...getErrors('email')}
                    />
                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        onChange={(event) => { setPassword(event.target.value) }}
                        autoComplete="current-password"
                        variant="outlined"
                        {...getErrors('password')}
                    />
                    <TextField
                        id="password-input-repeat"
                        label="Repeat password"
                        type="password"
                        onChange={(event) => { setRepeatPassword(event.target.value); }}
                        onBlur={checkPassword}
                        autoComplete="repeat-password"
                        variant="outlined"
                        {...getErrors('repeat_password')}
                    />

                    <Button variant="contained" color="primary" component="span" onClick={submit}>
                        Submit
                </Button>
                </Box>
            </Container>
        </div>
    );
}
