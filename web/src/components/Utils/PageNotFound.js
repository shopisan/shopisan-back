import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    h2: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "2rem",
        padding: "0 1rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "2rem"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "3rem",
            // width: '75%'
        }
    }
}))

export default function PageNotFound(){
    const classes = useStyles();
    const {t, i18n} = useTranslation();

    return (
        <div style={{height: "91vh", display: "flex", flexGrow: 1, alignItems: "center", justifyContent: "center"}}>
            <Typography variant="h2" className={classes.h2}>{t('pageNotFound')}</Typography>
        </div>
    );
}
