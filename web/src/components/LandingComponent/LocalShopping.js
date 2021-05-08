import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import useStyles from '../../theme';

export default function LocalShopping() {

    const classes = useStyles();

    const {t, i18n} = useTranslation();


    return(
        
            <div className={classes.localShopping}>
                <div className="ml-md-5">
                     <Typography variant="h1" className={classes.h1}>{t('local.title')}</Typography>
        <Typography variant="body1" className={classes.body1}>{t('local.text')} <strong> {t('local.text1')}</strong></Typography>
        <Typography variant="body1" className={classes.body1}> {t('local.text2')}</Typography>
                </div>
       
                <div className= "d-flex justify-content-center" >
            <img className={classes.img} src= "static/images/Iphone_Mockup .png"></img>
        </div>
        </div> 
       
    )
    
}

