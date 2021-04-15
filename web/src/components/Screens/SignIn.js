import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MuiAlert from '@material-ui/lab/Alert';
import { getErrors } from '../Utils/FormsUtils';


const useStyles = makeStyles(theme => ({
    brand:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "5rem",
            alignItems: "center",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem",
            marginTop: "0vh",
        }
    },
    signIn:{
        padding: "3rem",
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up('sm')]:{
            padding: '5rem',
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem"
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
        fontSize: "0.7rem", 
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
        [theme.breakpoints.up('md')]:{
            width: '40%'
        }
    },
    formControl:{
        borderRadius: "0.5rem",
        padding: "1.5rem 1rem",
        marginTop: "5px",
        fontSize:"10px",
        color: "#FAFAFA"
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
        [theme.breakpoints.up('sm')]:{
            '&:hover' :{
                backgroundColor: "#FF6565 !important",
                color: '#41455c',
                border: 'none',
                outline:'none',
            },
            '&:focus' :{
                backgroundColor: "#FF6565 !important",
                color: '#41455c',
                border: 'none',  
                outline: 'none',
                boxShadow: 'none'
            }
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

function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}


export default function SignIn(){
    const classes = useStyles();

    const [store, setStore] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const forceUpdate = useForceUpdate();

    function submit() {
        if (checkPassword()) {
            axios.post("/api/register/", {
                store,
                firstname,
                lastname,
                email,
                password,
                repeatPassword,
                mobile
            }).then((response, error) => {
                if (response.success) {
                    errors = {}
                    setShowSuccess(true)
                    return(
                        <Typography>Merci de votre inscription !</Typography>
                    )
                } else {
                    errors = response.data;
                    forceUpdate();
                }
                // console.log(response);
            });
        }
    }

    function checkPassword(event) {
        if (repeatPassword !== password) {
            errors.repeat_password = ["Les mots de passe ne matchent pas !"];
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

    
     return(
        <>
        <div className={classes.brand} id="signin">
            <div>
            <Typography variant="h1" className={classes.h1}>Boutiques, marques, créateurs</Typography>
        <Typography variant="body1" className={classes.body1}>Nos objectifs : </Typography>
        <Typography variant="body1" className={classes.body1}>- Booster votre visibilité !</Typography>
        <Typography variant="body1" className={classes.body1}>- Vous permettre de faire connaître votre savoir-faire aux utilisateurs et les inviter à
franchir le seuil de votre boutique qu’elle soit en ligne ou pas.</Typography>
        <Typography variant="body1" className={classes.body1}>Shopisan permet aux boutiques, marques, créateurs de toutes catégories d'être mises en lumière.</Typography>
            </div>
                
            <div className= "d-flex justify-content-center" >
            <img className={classes.img} src= "static/images/Iphone_Mockup .png"></img>
        </div>
        </div> 
        
        <div className={classes.signIn}>
            <div className="column">
                <Typography variant="h1" className={classes.h1}>S'inscrire</Typography>
                <Typography variant="body1" className={classes.body1}>Vous souhaitez vous inscrie ? L'inscription est gratuite.</Typography>
            </div>
            <div className="column">
                <Form className={classes.form} >
 <div className={classes.formContent}>
                        <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2} >Nom de votre boutique / marque</Form.Label>
                        <Form.Control className={classes.formControl} placeholder="Exemple: Shopisan" required onChange={(event) => {setStore(event.target.value)}} {...getErrors("store")}/>
                    </Form.Group>
                    <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>Prénom</Form.Label>
                        <Form.Control className={classes.formControl} placeholder="Exemple: Nicolas" required onChange={(event) => {setFirstname(event.target.value)}} {...getErrors("firstname")} />
                    </Form.Group>
                    </div>
                    
                    <div className={classes.formContent}>
                       <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>Nom</Form.Label>
                        <Form.Control className={classes.formControl} placeholder="Exemple: Goffard" required onChange={(event) => {setLastname(event.target.value)}} {...getErrors("lastname")}/>
                    </Form.Group>
                    <Form.Group className= {classes.group} controlId="formGridEmail">
                        <Form.Label className={classes.body2}>Voter addresse E-mail</Form.Label>
                        <Form.Control className={classes.formControl} type="email" placeholder="Exemple: info@shopisan.be" required onChange={(event) => {setEmail(event.target.value)}} {...getErrors("email")}/>
                    </Form.Group> 
                    </div>
                    
                    <div className={classes.formContent}>
                         <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>Votre numéro de téléphone</Form.Label>
                        <Form.Control className={classes.formControl} placeholder="Exemple: +32 411 22 33 44" required onChange={(event) => {setMobile(event.target.value)}} {...getErrors("mobile")}/>
                    </Form.Group>
                    <Form.Group className= {classes.group} controlId="formPlaintextPassword">
                        <Form.Label className={classes.body2}>Mot de passe</Form.Label>
                        <Form.Control className={classes.formControl} type="password" placeholder="Introduisez votre mot de passe" required onChange={(event) => {setPassword(event.target.value)}} {...getErrors("password")}/>
                    </Form.Group>
                 
                    </div>
                   
                    <Form.Group className= {classes.group} >
                        <Form.Label className={classes.body2}>Confirmation du mot de passe</Form.Label>
                        <Form.Control className={classes.formControl} type="password" placeholder="Réintroduisez votre mot de passe"  required onChange={(event) => {setRepeatPassword(event.target.value)}} {...getErrors("repeat_password")}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className={classes.body2}>Voter secteur d'activité</Form.Label>
                        <Form.Control className={classes.formControl} as="textarea" rows={5} placeholder="Expliquez-nous votre activité" />
                    </Form.Group>
                   
                    
                    <Button className={classes.submit} type="submit" onClick={submit}>
                    Envoyer
                    </Button>
                
                </Form>
            </div>
        </div>
        </>
    )
 }
    

