import React, { useState, useEffect } from "react";
import { makeStyles, TextField, Typography } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { getErrors } from '../Utils/FormsUtils';
import setAxiosDefaults from '../Utils/Common';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useTranslation } from "react-i18next";
import i18n from '../../i18n'
import axios from 'axios';

const lang = i18n.language;

setAxiosDefaults(axios);

const useStyles = makeStyles(theme => ({
    brand:{
        padding: "25vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "5rem",
            alignItems: "center",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem 15rem",
            marginTop: "0vh",
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 20rem"
        }
    },
    signIn:{
        padding: "3rem",
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up('sm')]:{
            padding: '5rem',
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem 15rem"
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 20rem"
        }
    },
    h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "2.5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "3rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "5rem",
            width: '75%'
        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]:{
            width: '100%',
            fontSize: "0.8rem",
            lineHeight: "1rem",
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            
        }
    },
    body2:{
        fontFamily: "Poppins",
        margin: "1rem 0 0 0",
        fontSize: "0.9rem", 
        color: "#41455c",
        lineHeight: "1rem",
    },
    form:{
        paddingTop: '3rem',
        [theme.breakpoints.up('md')]:{
            padding: '7rem'
        } 
    },
    formContent:{
        display: "flex",
        flexDirection: 'column',
        [theme.breakpoints.up('md')]:{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    },
    group:{
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]:{
            width: '40%'
        }
    },
    formControl:{
        borderRadius: "0.5rem",
        marginTop: "5px",
        width: 'auto',
        background: "white",
        '&:focus':{
            border: "1px solid #FF6565!important",
            boxShadow: "none!important"
        },
        
    }, 
    textarea: {
        borderRadius: "0.5rem",
        marginTop: "5px",
        background: "white",
        '&:focus':{
            borderColor: "#FF6565!important",
            boxShadow: "none!important"
        },
        [theme.breakpoints.up('md')]:{
            width: '250%',
        }
    },
    submit:{
        fontFamily: "Poppins",
        width: "100%",
        backgroundColor: "#FF6565",
        border: "none",
        borderRadius: "0.5rem",
        padding: "1rem 0", 
        textTransform: "uppercase",
        color: "#FFFFFF",
        fontSize:"0.8rem",
        fontWeight: "bold",
        '&:focus' :{
            backgroundColor: "#FF6565 !important",
            color: '#41455c',
            border: 'none',  
            outline: 'none',
            boxShadow: 'none'
        },
        '&:hover' :{
            backgroundColor: "#FF6565 !important",
            color: '#41455c',
            border: 'none',
            outline:'none',
        },
        [theme.breakpoints.up('md')]:{
            width: '40%',
            float: 'right',
            marginTop: '2rem',
            
        }
    },
    img:{
        height: '500px',
        [theme.breakpoints.up('sm')]:{
            height: '600px',
            marginLeft : "0"
        },
        [theme.breakpoints.up('md')]: {
            height: '700px'
        }
    }
}))

let errors = {};

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignIn(){
    const {t, i18n} = useTranslation();
    const classes = useStyles();

    const [value, setValue] = useState(0);
    const [brand , setBrand ] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const forceUpdate = useForceUpdate();
    const [showSuccess, setShowSuccess] = useState(false);
    let ref = null;

function useForceUpdate() {
    return () => setValue(value => value + 1);
}

    function submit() {
        console.log(ref);
        if (checkPassword()) {
            axios.post("/api/store_contact/",{
                brand ,
                username,
                name,
                surname,
                phone,
                message,
                email,
                password,
                lang
            }, {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }).then((response, error) => {
                console.log(response.data);
                if (response.status === 201) {
                    errors = {}
                    setShowSuccess(true);
                    console.log("okayyy");
                } else {
                    errors = response.data;
                    forceUpdate();
                }
            }).catch((error) => {
                console.log(error);
                // todo gérer les erreurs
            });
        }
    }

    function checkPassword(event) {
        if (repeatPassword !== password) {
            errors.repeat_password = ["Les mots de passe ne matchent pas !"];
            forceUpdate();

            return false
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
    
     return(
        <>
        <div className={classes.brand} id="signin" value={value}>
            <div>
            <Typography variant="h1" className={classes.h1}>{t('signUp.title')}</Typography>
            <Typography variant="body1" className={classes.body1}>{t('signUp.text')} </Typography>
            <Typography variant="body1" className={classes.body1}>{t('signUp.text1')}</Typography>
            <Typography variant="body1" className={classes.body1}>{t('signUp.text2')}</Typography>
            <Typography variant="body1" className={classes.body1}>{t('signUp.text3')}</Typography>
            </div>
                
            <div className= "d-flex justify-content-center" >
            <img className={classes.img} src= "/static/images/Iphone_Mockup .png"></img>
        </div>
        </div> 
        
        <div className={classes.signIn}>
            <div className="column">
                <Typography variant="h1" className={classes.h1}>{t('signUp.form.title')}</Typography>
                <Typography variant="body1" className={classes.body1}>{t('signUp.form.text')}</Typography>
            </div>
            <div className="column">
                <Form className={classes.form} ref={(form) => { ref = form; }}>
                <Snackbar open={showSuccess} autoHideDuration={10000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        {t('success')}
                    </Alert>
                </Snackbar>
                    <div className={classes.formContent}>
                        <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2} >{t('signUp.form.store')}</Form.Label>
                        <TextField className={classes.formControl} placeholder={t('signUp.form.storeLabel')} required
                        variant="outlined" onChange={(event) => {setBrand(event.target.value)}} {...getErrors("brand", errors)} />
                    </Form.Group>
        
                    <Form.Group className= {classes.group} >
                        <Form.Label className={classes.body2}>{t('signUp.form.username')}</Form.Label>
                        <TextField className={classes.formControl}  placeholder={t('signUp.form.usernameLabel')} required 
                        variant="outlined" onChange={(event) => {setUsername(event.target.value)}} {...getErrors("username", errors)} />
                    </Form.Group>
                    
                    </div>
                    
                    <div className={classes.formContent}>
                       <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>{t('signUp.form.firstname')}</Form.Label>
                        <TextField className={classes.formControl} placeholder={t('signUp.form.firstnameLabel')} required
                        variant="outlined" onChange={(event) => {setSurname(event.target.value)}}  {...getErrors("surname", errors)} />
                    </Form.Group>
                    <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>{t('signUp.form.lastname')}</Form.Label>
                        <TextField className={classes.formControl} placeholder={t('signUp.form.lastnameLabel')} required 
                        variant="outlined" onChange={(event) => {setName(event.target.value)}} {...getErrors("name", errors)} />
                    </Form.Group>
                    </div>
                    
                    <div className={classes.formContent}>
                         <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>{t('signUp.form.mobile')}</Form.Label>
                        <TextField className={classes.formControl} placeholder={t('signUp.form.mobileLabel')} required 
                        variant="outlined" onChange={(event) => {setPhone(event.target.value)}} {...getErrors("phone", errors)} />
                    </Form.Group>
                    <Form.Group className= {classes.group} >
                        <Form.Label className={classes.body2} >{t('signUp.form.email')}</Form.Label>
                        <TextField className={classes.formControl} id="email" type="email" placeholder={t('signUp.form.emailLabel')} required 
                        variant="outlined" onChange={(event) => {setEmail(event.target.value)}} {...getErrors("email", errors)} />
                    </Form.Group> 
                    </div>
                    <div className={classes.formContent}>
                      <Form.Group className= {classes.group} >
                        <Form.Label className={classes.body2}>{t('signUp.form.mdp')}</Form.Label>
                        <TextField className={classes.formControl} type="password" placeholder={t('signUp.form.mdpLabel')} required 
                        variant="outlined" onChange={(event) => {setPassword(event.target.value)}} {...getErrors("password", errors)}/>
                    </Form.Group>
                    <Form.Group className= {classes.group} >
                        <Form.Label className={classes.body2}>{t('signUp.form.mdpCheck')}</Form.Label>
                        <TextField className={classes.formControl} type="password" placeholder={t('signUp.form.mdpCheckLabel')}  required onBlur={checkPassword} 
                          variant="outlined" onChange={(event) => { setRepeatPassword(event.target.value); }} {...getErrors("repeat_password", errors)}/>
                    </Form.Group>  
                    </div>
                    <Form.Group controlId="exampleTextFieldTextarea1" className= {classes.group}>
                        <Form.Label className={classes.body2}>{t('signUp.form.sector')}</Form.Label>
                        <TextField id="outlined-multiline-static" multiline className={classes.textarea} 
                         variant="outlined" as="textarea" rows={5} placeholder={t('signUp.form.sectorLabel')} required
                        onChange={(event) => {setMessage(event.target.value)}} {...getErrors("message", errors)}/>
                    </Form.Group>
                   
                    <Button className={classes.submit} type="button" onClick={submit}>
                    {t('send')}
                    </Button>
                </Form>
            </div>
        </div>
        </>
    )
 }
    

