import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    confid:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "column",
            padding: "10rem 5rem",
            alignItems: "baseline",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem",
            marginTop: "0vh",
        }
    },
    h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "1.5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "3rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "5rem"
        }
    },
      h2:{
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "0.8rem",
        marginTop: "1rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "1.2rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "2rem"
        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "0.8rem",
            lineHeight: "1rem",
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            lineHeight: '1.5rem'
        }
    },
}))


export default function PolitiqueConfidentialte(){

    const classes = useStyles();

    return(
        <div className={classes.confid}>
            <Typography  className={classes.h1}>Politique de confidentialité</Typography>
            <Typography className={classes.body1}>Mise à jour le 15/04/2021</Typography>
            <Typography className={classes.h2}>1. Parties et Objets</Typography>
        </div>
    )
}