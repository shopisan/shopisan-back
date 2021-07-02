import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import StarIcon from '../../components/svg/StarIcon';
import useStyles from '../../theme';
import GooglePlayBtnEN from '../svg/GooglePlayBtnEN';
import GooglePlayBtnFR from '../svg/GooglePlayBtnFR';
import AppStoreBtnFR from '../svg/AppStoreBtnFR';
import AppStoreBtnEN from '../svg/AppStoreBtnEN';

export default function AddOnApp() {
    const {t, i18n} = useTranslation();
    const classes = useStyles();
    const locale = i18n.language;

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
                {locale === "fr" ?
                <>
                   <a href="https://apps.apple.com/fr/app/shopisan/id1567408162" >
                        <AppStoreBtnFR />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.jh8.shopisan" >
                        <GooglePlayBtnFR />
                    </a>  
                </> :
                   <>
                   <a href="https://apps.apple.com/tt/app/shopisan/id1567408162" >
                        <AppStoreBtnEN />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.jh8.shopisan" className={classes.btnApp}>
                        <GooglePlayBtnEN />
                    </a>  
                </> 
                }
            
            </div>
        </div>
    )
}