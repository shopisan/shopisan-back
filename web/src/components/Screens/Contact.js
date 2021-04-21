import React, {createRef, useRef, useState} from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { getErrors } from '../Utils/FormsUtils';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { findDOMNode } from 'react-dom';


const useStyles = makeStyles(theme => ({
    brand:{
        padding: "25vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "10rem 5rem 0 5rem",
            alignItems: "center",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            padding: "15rem 15rem 0 15rem",
            marginTop: "0vh",
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 20rem"
        }
    },
    contact:{
        padding: "3rem",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            padding: '5rem',
        },
        [theme.breakpoints.up('md')]:{
            padding: "5rem 15rem 10rem 15rem"
        },
        [theme.breakpoints.up('xl')]:{
            padding: "0rem 20rem 10rem 20rem"
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
            fontSize: "5rem"
        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]:{
            width: '80%',
            fontSize: "0.8rem",
            lineHeight: "1rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            lineHeight: '1.5rem'
        }
    },
    body2:{
        fontFamily: "Poppins",
        margin: "1rem 0 0 0",
        fontSize: "0.9rem", 
        color: "#41455c",
        lineHeight: "1rem",
    },
    formControl:{
        borderRadius: "0.5rem",
        padding: "1.5rem 1rem",
        marginTop: "5px",
        fontSize:"12px",
    }, 
    form:{
        [theme.breakpoints.up('md')]:{
            padding: '0 7rem'
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
        [theme.breakpoints.up('md')]:{
            width: '40%'
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
}))

let errors = {};

function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Contact(){

    const {t, i18n} = useTranslation();
    const classes = useStyles();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const forceUpdate = useForceUpdate();
    let ref = null;


    function submit() {
        console.log(ref);
        console.log(ref.reportValidity());
        if (ref.reportValidity()) {
            axios.post("/api/contact/", JSON.stringify({
                name, 
                surname,
                email,
                subject,
                message,
            }), {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }).then((response, error) => {
                if (response.success) {
                    errors = {}
                    setShowSuccess(true);
                    console.log("okayyy");
                    return(
                        <Typography>Merci pour votre message !</Typography>
                    )
                } else {
                    errors = response.data;
                    console.log(errors);
                    forceUpdate();
                }
            });
        }
    }

    function handleClose() {
        setShowSuccess(false)
    }
   
return(
<>
    <div className={classes.brand} id="contact">
            <div>
                <Typography variant="h1" className={classes.h1}>{t('contact.title')}</Typography>
                <Typography variant="body1" className={classes.body1}>{t('contact.text')}</Typography>
            </div>
    </div>
            <div className={classes.contact}>
            <Form className={classes.form} ref={(form) => { ref = form; }}>
            <Snackbar open={showSuccess} autoHideDuration={10000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
                    </Alert>
                </Snackbar>
                    <div className={classes.formContent}>
                       <Form.Group  className= {classes.group}>
                        <Form.Label className={classes.body2}>{t('contact.firstname')}</Form.Label>
                        <Form.Control className={classes.formControl} placeholder={t('contact.firstnameLabel')} required 
                        onChange={(event) => {setName(event.target.value)}} {...getErrors("name", errors)}/>
                    </Form.Group>
                    <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>{t('contact.lastname')}</Form.Label>
                        <Form.Control className={classes.formControl} placeholder={t('contact.lastnameLabel')} required
                        onChange={(event) => {setSurname(event.target.value)}} {...getErrors("surname", errors)}/>
                    </Form.Group> 
                    </div>
                    
                <div className={classes.formContent}>
                    <Form.Group className= {classes.group} >
                        <Form.Label className={classes.body2}>{t('contact.email')}</Form.Label>
                        <Form.Control className={classes.formControl} id="email" type="email" placeholder={t('contact.emailLabel')} required 
                        onChange={(event) => {setEmail(event.target.value)}} {...getErrors("email", errors)}/>
                    </Form.Group> 
                    <Form.Group className= {classes.group} >
                        <Form.Label className={classes.body2}>{t('contact.subject')}</Form.Label>
                        <Form.Control className={classes.formControl} placeholder={t('contact.subjectLabel')} required 
                        onChange={(event) => {setSubject(event.target.value)}} {...getErrors("subject", errors)}/>
                    </Form.Group> 
                </div>
                
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className={classes.body2}>{t('contact.message')}</Form.Label>
                        <Form.Control className={classes.formControl} as="textarea" rows={5} placeholder={t('contact.messageLabel')} required
                        onChange={(event) => { setMessage(event.target.value); }} {...getErrors("message", errors)}/>
                    </Form.Group>
                    <Button className={classes.submit} type="button" onClick={submit} >
                    {t('send')}
                    </Button>
                </Form>
            </div>
       </>
)

}