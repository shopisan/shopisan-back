import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    general:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "10rem 5rem",
            alignItems: "center",
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
}))


export default function ConditionsGenerales(){

    const classes = useStyles();

    return(
        <div className={classes.general}>
            <Typography  className={classes.h1}>Conditions générales</Typography>
        </div>
    )
}