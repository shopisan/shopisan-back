import { Typography } from "@material-ui/core";
import React from "react";
import LocalShopping from '../LandingComponent/LocalShopping';
import Discover from '../LandingComponent/Discover';
import { useTranslation } from "react-i18next";
import useStyles from '../../theme';

export default function Concept() {
    const { t, i18n } = useTranslation();
    const classes = useStyles();

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
                <div className="d-flex justify-content-center" >
                    <img className={classes.img} src="static/images/Iphone_Mockup .png"></img>
                </div>
            </div>
            <LocalShopping />
            <Discover />
        </div>
    );
}