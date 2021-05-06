import React from 'react';
import {makeStyles, Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    discover:{
        padding: '15vh 2.5rem',
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "0rem 5rem",
            alignItems: "center"
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

export default function Discover(){

    const {t, i18n} = useTranslation();
    const classes = useStyles();

    return(
        <>
            <div className={classes.discover}>
                <div>
                    <Typography variant="h1" className={classes.h1}>{t('discovery.title')}</Typography>
                    <Typography variant="body1" className={classes.body1}>{t('discovery.text')}<br/>{t('discovery.text1')}</Typography>
                </div>
        
                <div className= "d-flex justify-content-center" >
            <img className={classes.img} src= "static/images/Iphone_Mockup .png"></img>
        </div>
        </div> 
        </>
    )
}