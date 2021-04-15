import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
    brand:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "10rem 5rem 0 5rem",
            alignItems: "center",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            padding: "15rem 10rem 0 10rem",
            marginTop: "0vh",
        }
    },
    contact:{
        padding: "3rem",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            padding: '5rem',
        },
        [theme.breakpoints.up('md')]:{
            padding: "5rem 10rem 10rem 10rem"
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
        [theme.breakpoints.up('md')]:{
            padding: '2rem 1rem',
            borderRadius:"1rem"
        }
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
}))

export default function Contact(){

    const classes = useStyles();
return(
<>
    <div className={classes.brand} id="contact">
            <div>
                <Typography variant="h1" className={classes.h1}>Nous contacter</Typography>
                <Typography variant="body1" className={classes.body1}>Vous avez une question, une suggestion ou souhaitez simplement nous adresser un message ?</Typography>
            </div>
    </div>
            <div className={classes.contact}>
            <Form className={classes.form}>
            <div className={classes.formContent}>
                <Form.Group  className= {classes.group}>
                        <Form.Label className={classes.body2}>Prénom</Form.Label>
                        <Form.Control className={classes.formControl} placeholder="Exemple: Nicolas" required />
                    </Form.Group>
                    <Form.Group className= {classes.group}>
                        <Form.Label className={classes.body2}>Nom</Form.Label>
                        <Form.Control className={classes.formControl} placeholder="Exemple: Goffard" required/>
                    </Form.Group>
                </div>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className={classes.body2}>Vote message</Form.Label>
                        <Form.Control className={classes.formControl} as="textarea" rows={5} placeholder="Entrez vote message..." required/>
                    </Form.Group>
                    <Button className={classes.submit} type="submit" >
                    Envoyer
                    </Button>
                
                </Form>
            </div>
       </>
)

}