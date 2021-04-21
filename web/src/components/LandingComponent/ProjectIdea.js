import React from 'react';
import {makeStyles, Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    projectIdea:{
        padding: '15vh 40px',
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row-reverse",
            padding: " 5rem",
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
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            width: '80%',
            lineHeight: '1.5rem'
        }
    },
    img:{
        height: '450px',
        marginTop: '2rem',
        [theme.breakpoints.up('sm')]:{
            height: '500px',
            marginLeft : "0"
        },
        [theme.breakpoints.up('md')]: {
            height: '700px'
        }
    }
}))

export default function ProjectIdea(){

    const {t, i18n } = useTranslation();
    const classes = useStyles();

    return(
        <>
            <div className={classes.projectIdea} id="idea">
                <div>
                    <Typography variant="h1" className={classes.h1}>{t('idea.title')}</Typography>
    
                    <Typography variant="body1" className={classes.body1}>{t('idea.text')}</Typography>
                    <Typography variant="body1" className={classes.body1}>{t('idea.text1')}</Typography>
                    <Typography variant="body1" className={classes.body1}>{t('idea.text2')}</Typography>
                </div>
       
                <div className= "d-flex justify-content-center" >
            <img className={classes.img} src= "static/images/Iphone_Mockup_2.png"></img>
        </div>
        </div> 
        </>
    )
}