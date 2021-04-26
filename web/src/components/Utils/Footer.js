import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom';
import InstagramIcon from '../svg/Instagram';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(5),
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            padding: "2rem 5rem",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        [theme.breakpoints.up('md')]:{
            padding: "2rem 7rem",
        }
    },
    row:{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
        [theme.breakpoints.up('sm')]:{
            width: '75%'
        }
    },
    rowMedia:{
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: "1rem", 
        [theme.breakpoints.up('sm')]:{
            marginTop: '0px'
        }
    },
    body1: {
        fontFamily: "Poppins",
        fontSize: "0.4rem", 
        color: "#41455c",
        [theme.breakpoints.up('sm')]:{
            fontSize: "0.6rem",
            lineHeight: "1rem",
        },
    },
}))

export default function Footer(){

    const {t, i18n} = useTranslation();
const classes = useStyles();

    return(
        <div className={classes.footer}>
            <div className={classes.row}>
            <NavLink to="/" className="nav-link p-0">
                  <Typography variant={'body1'} className={classes.body1}>© 2021 SHOPISAN</Typography>
                </NavLink> 
            <NavLink to="/generals_conditions" className="nav-link p-0">
            <Typography variant={'body1'} className={classes.body1}>{t('gc.title')}</Typography>
            </NavLink>
            <NavLink to="/privacy_policy" className="nav-link p-0">
            <Typography variant={'body1'} className={classes.body1}>{t('pp.title')}</Typography>
            </NavLink>
            </div>
            <div className={classes.rowMedia}>
                <a href="/">
                    <InstagramIcon/>
                </a>

            </div>
        </div>
    )
}