import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AppStoreBtn from '../../components/svg/AppStoreBtn';
import GooglePlayBtn from "../../components/svg/GooglePlayBtn";
import StarIcon from '../../components/svg/StarIcon';
import useStyles from '../../theme';

export default function AddOnApp() {
    const {t, i18n} = useTranslation();
    const classes = useStyles();

    return(
        <div className={classes.addonapp}>
            <div className={classes.row}>
                <div className={classes.iconApp}>
                    <img src={"static/images/LOGO_ROUGE_SHOPISAN.png"} alt={"logo shopisan"} width={"50px"}/>
                </div>
                <div className="column">
                    <div>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                    </div>
                    <Typography variant={'body1'} className={classes.body2}>{t('userApp')}</Typography>
                </div>
            </div>
            <Typography variant="h1" className={classes.h3}>{t('discoverApp')}</Typography>
            <div className={classes.row}>
                <a href="/" >
                    <AppStoreBtn />
                </a>
                <a href="/" >
                    <GooglePlayBtn />
                </a>
            </div>
        </div>
    )
}