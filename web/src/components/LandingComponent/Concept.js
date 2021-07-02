import { Typography } from "@material-ui/core";
import React from "react";
import LocalShopping from '../LandingComponent/LocalShopping';
import Discover from '../LandingComponent/Discover';
import VideoMockUp from '../VideoMockUp';
import { useTranslation } from "react-i18next";
import useStyles from '../../theme';

export default function Concept() {
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const locale = i18n.language;

    function getVideoUrl(){
        return `https://d3un281b2108zi.cloudfront.net/video/chercher-${locale.toUpperCase()}.mp4`;
    }

    return (
        <div className={classes.container} id="concept">
            <div className={classes.concept}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Typography variant="h2" className={classes.h2}>{t('concept.baseline')}</Typography>
                    <div>
                    <Typography variant="h1" className={classes.h1}>{t('concept.title')}</Typography>
                    <Typography className={classes.body1}>
                        {t('concept.text1')}
                        <br></br>
                        {t('concept.text')}
                    </Typography>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-sm-5" >
                    <VideoMockUp url={getVideoUrl()}/>
                </div>
            </div>
            <LocalShopping />
            <Discover />
        </div>
    );
}