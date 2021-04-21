import React from 'react';
import {makeStyles, Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    discover:{
        padding: '15vh 40px',
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "0rem 5rem",
            alignItems: "center"
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
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            
            lineHeight: '1.5rem'
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

export default function Discover(){

    const {t, i18n} = useTranslation();
    const classes = useStyles();

    return(
        <>
            <div className={classes.discover}>
                <div>
                    <Typography variant="h1" className={classes.h1}>{t('discovery.title')}</Typography>
                    <Typography variant="body1" className={classes.body1}>{t('discovery.text')}<i>{t('discovery.text1')}</i> </Typography>
                </div>
        
                <div className= "d-flex justify-content-center" >
            <img className={classes.img} src= "static/images/Iphone_Mockup .png"></img>
        </div>
        </div> 
        </>
    )
}