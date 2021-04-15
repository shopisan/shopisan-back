import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import AppStoreBtn from '../../components/svg/AppStoreBtn';
import StarIcon from '../../components/svg/StarIcon';

const useStyles = makeStyles(theme => ({
    addonapp: {
        padding: theme.spacing(5),
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            padding: "5rem"
        },
        [theme.breakpoints.up('md')]:{
            padding: '10rem'
        }
        
    },
    row:{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
    },
    iconApp:{
        height: "5rem",
        width: "5rem",
        borderRadius: "1.5rem",
        boxShadow: "0px 0px 10px 2px lightgrey",
        padding: "10px 15px",
        backgroundColor: "white",
        marginRight: "1rem"
    },
    body1: {
        fontFamily: "Poppins",
        marginTop: "0.5rem",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem"
    },
    h1: {
        fontFamily: "Poppins",
        margin:'2rem 0 2rem 0',
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "2.5rem",
        [theme.breakpoints.up('sm')]: {
            width: '75%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '50%'
        }
    },
 
}))

export default function AddOnApp() {

const classes = useStyles();

    return(
        
        <div className={classes.addonapp}>
            <div className={classes.row}>
                <div className={classes.iconApp}>
                    <img src={"static/images/LOGO_ROSE_SHOPISAN.png"} alt={"logo shopisan"} width="50px"/>
                </div>
                <div className="column">
                    <div>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                    <Typography variant={'body1'} className={classes.body1}>Plus de 5000 utilisateurs sur l'application mobile</Typography>
                </div>
            </div>
            <Typography variant="h1" className={classes.h1}>Découvrez l'application</Typography>
            <div className={classes.row}>
                <a href="/">
                    <AppStoreBtn />
                </a>
                <a href="/">
                    <img src="static/images/googleplay_badge.png" alt="google play badge" height="52px"/>
                </a>
            </div>
        </div>
    
    )
}