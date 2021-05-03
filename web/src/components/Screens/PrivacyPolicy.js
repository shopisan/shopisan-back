import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';


const useStyles = makeStyles(theme => ({
    confid:{
        padding: "20vh 40px 0 40px",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "column",
            padding: "10rem 5rem",
            alignItems: "baseline",
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


export default function PrivacyPolicy(){
    const  {t, i18n } = useTranslation();
    const classes = useStyles();

    return(
        <div className={classes.confid}>
            <Helmet>
                <title>Shopisan | {t('pp.title')}</title>
            </Helmet>
            <Typography className={classes.h1}>{t('pp.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.date')}</Typography>
            <Typography className={classes.h2}>{t('pp.parts.title')}</Typography>
            <Typography className={classes.body1}>Shopisan ({t('pp.parts.this')} <strong>"Shopisan"</strong> {t('pp.parts.or')} <strong>" {t('pp.parts.resp')} "</strong>)
            {/* <br></br>
            {t('pp.parts.address')} */}
            <br></br>
            {t('pp.parts.email')} <a href="mailto:info@shopisan.com">info@shopisan.com</a>
            {/* <br></br>
            {t('pp.parts.mobile')} */}
            <br></br>
            <br></br>
            {t('pp.parts.text')} ({t('pp.parts.this')}  <strong>" {t('pp.parts.site')} "</strong>) {t('pp.parts.text1')}
            <br></br>
            {t('pp.parts.text2')} <strong>" {t('pp.parts.user')} "</strong> {t('pp.parts.text3')}
            <br></br>
            {t('pp.parts.text4')}({t('pp.parts.this')}, <strong>" {t('pp.parts.law')} "</strong>) {t('pp.parts.text5')} ({t('pp.parts.this')} <strong>" {t('pp.parts.rules')} "</strong>).
            <br></br>
            {t('pp.parts.text6')} ({t('pp.parts.this')}<strong>" {t('pp.parts.sub')} "</strong>) {t('pp.parts.text7')}. 
            </Typography>

            <Typography className={classes.h2}>{t('pp.data.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.data.text')}
            <br></br>
            {t('pp.data.text1')}
            <br></br>
            - {t('pp.data.text2')}
            <br></br>
            - {t('pp.data.text3')}
            </Typography>

            <Typography className={classes.h2}>{t('pp.data2.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.data2.text')}
            <br></br>
            - {t('pp.data2.text1')}
            <br></br>
            - {t('pp.data2.text2')}      
            </Typography>

            <Typography className={classes.h2}>{t('pp.data3.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.data3.text')}
            <br></br>
            - {t('pp.data3.text1')}
            <br></br>
            - {t('pp.data3.text2')}
            </Typography>

            <Typography className={classes.h2}>{t('pp.consent.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.consent.text')}
            <br></br>
            {t('pp.consent.text1')}
            <br></br>
            {t('pp.consent.text2')}
            <br></br>
            {t('pp.consent.text3')}
            </Typography>

            <Typography className={classes.h2}>{t('pp.time.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.time.text')}
            <br></br>
            {t('pp.time.text1')}
            </Typography>

            <Typography className={classes.h2}>{t('pp.receiver.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.receiver.text')}
            <br></br>
            {t('pp.receiver.text1')}
            <br></br>
            {t('pp.receiver.text2')}
            </Typography>

            <Typography className={classes.h2}>{t('pp.rights.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.rights.text')}
            <br></br>
            <br></br>
            {t('pp.rights.a.title')}
            <br></br>
            {t('pp.rights.a.text')}
            <br></br>
            - {t('pp.rights.a.text1')}
            <br></br>
            - {t('pp.rights.a.text2')}
            <br></br>
            - {t('pp.rights.a.text3')}
            <br></br>
            - {t('pp.rights.a.text4')}
            {/* <br></br>
            - {t('pp.rights.a.text5')} */}
            <br></br>
            - {t('pp.rights.a.text6')}
            <br></br>
            - {t('pp.rights.a.text7')}
            <br></br>
            - {t('pp.rights.a.text8')}
            <br></br>
            - {t('pp.rights.a.text9')}
            <br></br>
            <br></br>
            {t('pp.rights.b.title')}
            <br></br>
            {t('pp.rights.b.text')}
            <br></br>
            {t('pp.rights.b.text1')}
            <br></br>
            {t('pp.rights.b.text2')}
            <br></br>
            <br></br>
            {t('pp.rights.c.title')}
            <br></br>
            {t('pp.rights.c.text')}
            <br></br>
            {t('pp.rights.c.text1')}
            <br></br>
            {t('pp.rights.c.text2')}
            <br></br>
            - {t('pp.rights.c.text3')}
            <br></br>
            - {t('pp.rights.c.text4')}
            <br></br>
            - {t('pp.rights.c.text5')}
            <br></br>
            {t('pp.rights.c.text6')}
            <br></br>
            <br></br>
            {t('pp.rights.d.title')}
            <br></br>
            {t('pp.rights.d.text')}
            <br></br>
            {t('pp.rights.d.text1')}
            <br></br>
            <br></br>
            {t('pp.rights.e.title')}
            <br></br>
            {t('pp.rights.e.text')}
            <br></br>
            {t('pp.rights.e.text1')}
            <br></br>
            {t('pp.rights.e.text2')}
            <br></br>
            {t('pp.rights.e.text3')}
            <br></br>
            <br></br>
            {t('pp.rights.f.title')}
            <br></br>
            {t('pp.rights.f.text')}
            <br></br>
            {t('pp.rights.f.text1')}
            <br></br>
            {t('pp.rights.f.text2')}
            <br></br>
            <br></br>
            {t('pp.rights.g.title')}
            <br></br>
            {t('pp.rights.g.text')}
            <br></br>
            <br></br>
            {t('pp.rights.g.text1')}
            <br></br>
            {t('pp.rights.g.text2')}
            <br></br>
            {t('pp.rights.g.address')}
            <br></br>
            {t('pp.rights.g.phone')}
            <br></br>
            {t('pp.rights.g.fax')}
            <br></br>
            {t('pp.rights.g.email')}
            <br></br>
            <br></br>
            {t('pp.rights.g.text3')}
            </Typography>
        
            <Typography className={classes.h2}>{t('pp.cookies.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.cookies.text')}
            <br></br>
            <br></br>
            {t('pp.cookies.a.title')}
            <br></br>
            {t('pp.cookies.a.text')}
            <br></br>
            {t('pp.cookies.a.text1')}
            <br></br>
            {t('pp.cookies.a.text2')}
            <br></br>
            {t('pp.cookies.a.text3')}
            <br></br>
            {t('pp.cookies.a.text3')}
            <br></br>
            <br></br>
            {t('pp.cookies.b.title')}
            <br></br>
            {t('pp.cookies.b.text')}
            <br></br>
            {t('pp.cookies.b.text1')}
            <br></br>
            {t('pp.cookies.b.text2')}
            <br></br>
            {t('pp.cookies.b.text3')}
            <br></br>
            {t('pp.cookies.b.text4')}
            <br></br>
            <br></br>
            {t('pp.cookies.c.title')}
            <br></br>
            {t('pp.cookies.c.text')}
            <br></br>
            - {t('pp.cookies.c.text1')}
            <br></br>
            <br></br>
            {t('pp.cookies.d.title')}
            <br></br>
            {t('pp.cookies.d.text')}
            <br></br>
            {t('pp.cookies.d.text1')}
            <br></br>
            {t('pp.cookies.d.text2')}
            <br></br>
            {t('pp.cookies.d.text3')}
            <br></br>
            - Internet Explorer : http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies
            <br></br>
            - Microsoft Edge : http://windows.microsoft.com/en-gb/windows-10/edge-privacy-faq
            <br></br>
            - Chrome : https://support.google.com/accounts/answer/61416?hl=fr
            <br></br>
            - Firefox : https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences
            <br></br>
            - Safari : https://support.apple.com/kb/ph21411?locale=fr_CA
            <br></br>
            {t('pp.cookies.d.text4')}
            </Typography>

            <Typography className={classes.h2}>{t('pp.limit.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.limit.text')}
            <br></br>
            {t('pp.limit.text1')}
            <br></br>
            {t('pp.limit.text2')}
            </Typography>

            <Typography className={classes.h2}>{t('pp.security.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.security.text')}
            <br></br>
            {t('pp.security.text1')}
            </Typography>    

            <Typography className={classes.h2}>{t('pp.modification.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.modification.text')}
            </Typography>   

            <Typography className={classes.h2}>{t('pp.jurisdiction.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.jurisdiction.text')}
            </Typography>  

            <Typography className={classes.h2}>{t('pp.contact.title')}</Typography>
            <Typography className={classes.body1}>{t('pp.contact.text')}
            </Typography>  
       
        </div>
    )
}
