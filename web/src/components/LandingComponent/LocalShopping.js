import React from 'react';
import {Typography} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import useStyles from '../../theme';
import VideoMockUp from '../VideoMockUp';


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
    
            <div className= "d-flex justify-content-center mt-5" >
                <VideoMockUp url={"/static/video/preparer-FR.mp4"}/>
            </div>
        </div> 
    )
}
