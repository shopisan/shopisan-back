import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LocalShopping from '../LandingComponent/LocalShopping';
import Discover from '../LandingComponent/Discover';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
    container:{
        backgroundColor: "#FAFAFA",
        display: 'flex',
        flexDirection: 'column',
        paddingTop: "5rem",
        [theme.breakpoints.up('sm')]:{
            alignItems: "center",
            marginTop: "10vh",
            paddingTop: "0",
        },
        [theme.breakpoints.up('md')]:{
            marginTop: "0vh",
         
        }
    },
    concept:{
        padding: "15vh 2.5rem",
        [theme.breakpoints.up('sm')]:{
            padding: "0 5rem",
            display: "flex",
            alignItems: 'center'
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem 17rem"
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 30rem"
        }
    },
    h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "2.8rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "3rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "5rem"
        }
    },
    h2: {
        fontFamily: "Poppins",
        // fontWeight: "bold",
        marginBottom: "2rem",
        color: "#41455c",
        fontSize: "1rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "1rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "1rem"
        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]:{
            lineHeight: "1.2rem",
            width: '80%',
        },
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

export default function Concept() {

    const {t, i18n} = useTranslation();
    const classes = useStyles();

    return(
        
            <div className={classes.container} id="concept">
                <div className={classes.concept}>
                    <div>
                        <Typography className={classes.h2}>{t('concept.baseline')}</Typography>
                        <Typography variant="h1" className={classes.h1}>{t('concept.title')}</Typography>
                        <Typography className={classes.body1}>{t('concept.text')} 
                        <br></br>
                        {t('concept.text1')}</Typography>
                    </div>
                   <div className= "d-flex justify-content-center" >
                    <img className={classes.img} src= "static/images/Iphone_Mockup .png"></img>
                </div>
                </div>
                <LocalShopping/>
                <Discover/>
                
        </div> 
       
    )
    
}