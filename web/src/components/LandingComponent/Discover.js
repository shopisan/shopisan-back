import React from 'react';
import {Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import useStyles from '../../theme';
import VideoMockUp from '../VideoMockUp';


export default function Discover(){
    const {t, i18n} = useTranslation();
    const classes = useStyles();
    const locale = i18n.language;

    function getVideoUrl(){
        return locale === "fr" ? "static/video/geoloc-FR.mp4" : "static/video/geoloc-EN.mp4";
    }

    return(
        <>
            <div className={classes.discover}>
                <div>
                    <Typography variant="h1" className={classes.h1}>{t('discovery.title')}</Typography>
                    <Typography variant="body1" className={classes.body1}>{t('discovery.text')}<br/>{t('discovery.text1')}</Typography>
                </div>
        
                <div className= "d-flex justify-content-center mt-5 mb-sm-5" >
                <VideoMockUp url={getVideoUrl()}/>
        </div>
        </div> 
        </>
    )
}