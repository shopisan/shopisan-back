import React from 'react';
import {Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import useStyles from '../../theme';

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