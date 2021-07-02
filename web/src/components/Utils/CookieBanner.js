import React from "react";
import { CookieBanner } from '@palmabit/react-cookie-law';
import { useTranslation } from "react-i18next";


export default function CustomCookieBanner(){
    const {t, i18n} = useTranslation();

    return <CookieBanner
        // onAccept={() => actOnAccept()}
        message={t('textCookies')}
        privacyPolicyLinkText={t('cookiesPolicy')}
        policyLink="/privacy_policy"
        statisticsOptionText="Statistics"
        managePreferencesButtonText={t('manageBtn')}
        acceptButtonText={t('accept')}
        showPreferencesOption={false}
        showMarketingOption={false}
        statisticsDefaultChecked = {true}
        styles={{
        dialog:{
        background: "white",
        position: "fixed",
        bottom: '0px',
        left:"0px",
        right: '0px',
        zIndex: "100000",
        padding: "3rem 1rem",
        borderTop: '1px solid #FFCFCF'
        },
        container:{
            padding: '1rem'
        },
        message:{
            fontSize: "1rem",
            fontWeight: 'bold',
            marginBottom : '1rem',
        },
        policy: {
        fontsize: '1rem' ,
        color: 'black',
        textDecoration: "underline",
        },
        optionWrapper:{
        display: 'inline-flex',
        position:"relative",
        margin: '0 7px',
        float: 'left'
        },
        optionLabel:{
        color: 'black',
        fontSize:'15px',
        marginLeft: '20px',
        marginBottom: "0px"
        },
        // buttonWrapper:{
        //     marginTop: "-3rem",
        // display: "flex",
        // justifyContent:  "flex-end"
        // },
        button:{
        padding: "0.5rem 1rem",
        borderRadius: "1rem",
        border: "none",
        backgroundColor: "#FFCFCF",
        marginRight: '1rem',
        marginTop: "10px",
        color: "black"
        },
        manageButton:{
            content: "Manage my cookies"
        }
    }}
    />
}
