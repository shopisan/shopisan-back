import React from 'react';
import {Typography} from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import useStyles from '../../theme';

export default function ProjectIdea(){
    const {t, i18n } = useTranslation();
    const classes = useStyles();
    const locale = i18n.language;

    return(
        <>
            <div className={classes.projectIdea} id="idea">
                <div className="ml-md-5">
                    <Typography variant="h1" className={classes.h1}>{t('idea.title')}</Typography>
    
                    <Typography variant="body1" className={classes.body1}>{t('idea.text')}</Typography>
                    <Typography variant="body1" className={classes.body1}>{t('idea.text1')}</Typography>
                    <Typography variant="body1" className={classes.body1}>{t('idea.text2')}</Typography>
                </div>
       
                <div className= "d-flex justify-content-center mt-5 mr-lg-5" >
                    {locale === "fr" ?
                        <img className={classes.img} src="static/images/double_iphone_mockup.png"></img>
                            :
                        <img className={classes.img} src="static/images/mockup_double_iphone_EN.png"></img>
                    }
                </div>
            </div> 
        </>
    )
}