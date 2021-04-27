import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


const useStyles = makeStyles(theme => ({
    general:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "column",
            padding: "10rem 5rem",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem",
            marginTop: "0vh",
        }
    },
    h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "1.5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "3rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "5rem"
        }
    },
    h2:{
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "0.8rem",
        marginTop: "5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "1.2rem",
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "2rem"
        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "0.8rem",
            lineHeight: "1rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            lineHeight: '1.5rem'
        }
    },
}))


export default function GeneralsConditions(){

    const {t, i18n} = useTranslation();
    const classes = useStyles();

    return(
        <div className={classes.general}>
            <Helmet>
                <title>Shopisan | {t('gc.title')}</title>
            </Helmet>
            <Typography  className={classes.h1}>{t('gc.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.update')}
            <br></br>
            {t('gc.site')}
            <br></br>
            {t('gc.url')}
            <br></br>
            ( {t('gc.this')} <strong>" {t('gc.platform')} "</strong>)
            <br></br>
            Shopisan
            <br></br>
            <br></br>
            {t('gc.address')}
            <br></br>
            {t('gc.companyNumber')}
            <br></br>
            {t('gc.email')}
            <br></br>
            {t('gc.mobile')}
            <br></br>
            ( {t('gc.this')} <strong>" Shopisan "</strong>)
            <br></br>
            <br></br>
            </Typography>

            <Typography className={classes.h2}>{t('gc.application.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.application.text')} ({t('gc.this')}  <strong>" {t('gc.application.cgu')} "</strong>) {t('gc.application.text1')} ({t('gc.this')} <strong>" {t('gc.application.user')} "</strong>).
            <br></br>
            {t('gc.application.text3')}
            <br></br>
            {t('gc.application.text4')}
            <br></br>
            {t('gc.application.text5')}
            </Typography>

            <Typography className={classes.h2}>{t('gc.website.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.website.a.title')}
            <br></br>
            {t('gc.website.a.text')}
            <br></br>
            {t('gc.website.a.text1')}
            <br></br>
            {t('gc.website.a.text2')}
            <br></br>
            <br></br>
            {t('gc.website.b.title')}
            <br></br>
            {t('gc.website.b.text1')}
            <br></br>
            {t('gc.website.b.text2')}
            <br></br>
            {t('gc.website.b.text3')}
            <br></br>
            </Typography>
        
            <Typography className={classes.h2}>{t('gc.link.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.link.text')}
            <br></br>
            {t('gc.link.text1')}
            </Typography>
        
            <Typography className={classes.h2}>{t('gc.property.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.property.text')}
            <br></br>
            {t('gc.property.text1')}
            <br></br>
            {t('gc.property.text2')}
            <br></br>
            {t('gc.property.text3')}
            </Typography>

            <Typography className={classes.h2}>{t('gc.data.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.data.text')}
            <br></br>
            {t('gc.data.text1')}
            <br></br>
            {t('gc.data.text2')}
            </Typography>

            <Typography className={classes.h2}>{t('gc.law.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.law.text')}
            <br></br>
            {t('gc.law.text1')}
            </Typography>

            <Typography className={classes.h2}>{t('gc.general.title')}</Typography>
            <Typography className={classes.body1}>{t('gc.general.text')}
            <br></br>
            {t('gc.general.text1')}
            <br></br>
            {t('gc.general.text2')}
            </Typography>

        </div>
    )
}