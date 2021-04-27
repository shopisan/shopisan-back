import React, { Suspense, lazy } from "react";
import {render} from "react-dom"
import './css/index.scss'
// import Landing from "./components/Screens/Landing"
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "react-bootstrap";
// import MenuHeader from "./components/Utils/MenuHeader";
// import SignIn from "./components/Screens/SignIn";
// import Footer from './components/Utils/Footer';
// import Contact from "./components/Screens/Contact";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
// import PrivacyPolicy from "./components/Screens/PrivacyPolicy";
// import GeneralsConditions from "./components/Screens/GeneralsConditions";
// import ScrollToTop from "./components/Utils/ScrollToTop";
import { CookieBanner } from '@palmabit/react-cookie-law';
import './i18n';
import { useTranslation } from "react-i18next";
import {Helmet} from "react-helmet";
// import PageNotFound from "./components/Utils/PageNotFound";

const MenuHeader = lazy(() => import("./components/Utils/MenuHeader"));
const Footer = lazy(() => import("./components/Utils/Footer"));
const ScrollToTop = lazy(() => import("./components/Utils/ScrollToTop"));

const Landing = lazy(() => import("./components/Screens/Landing"));
const Contact = lazy(() => import("./components/Screens/Contact"));
const SignIn = lazy(() => import("./components/Screens/SignIn"));
const PrivacyPolicy = lazy(() => import("./components/Screens/PrivacyPolicy"));
const GeneralsConditions = lazy(() => import("./components/Screens/GeneralsConditions"));
const PageNotFound = lazy(() => import("./components/Utils/PageNotFound"));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FAFAFA",
        },
        secondary: {
            main: "#FFFFFF"
        },
        info: {
            main: "#41455c"
        }
    },
    typography: {
        fontFamily: "Poppins",
        h1: {
            fontWeight: "bold",
            color: "#41455c",
            fontSize: "3.5rem"
        },
        body1: {
            margin: "2rem 0 0 0",
            fontSize: "0.7rem", 
            color: "#41455c",
            lineHeight: "1rem"
        },
    },
   

})

function Base(){
    const {t, i18n} = useTranslation();
    const hasCookie = getCookie('rcl_consent_given');

    function actOnAccept(){
        if (hasCookie == ""){
            window.location.reload()
        }
    }

    return (
        <React.StrictMode>
        <Suspense fallback={(<div>Loading...</div>)}>
             <CookieBanner
                onAccept={() => actOnAccept()}
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
        <Helmet>
            <title>Shopisan | {t('title.discoverStoreAround')}</title>
            <meta name="description" content={t('metaDescription')} />
        </Helmet>
        <Router >
            <ThemeProvider theme={theme}>
                <ScrollToTop/>
                <MenuHeader/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/signup' component={SignIn}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/privacy_policy' component={PrivacyPolicy}/>
                    <Route path='/generals_conditions' component={GeneralsConditions}/>
                    <Route path='*' component={PageNotFound} />
                </Switch>
                <Footer/>
            </ThemeProvider> 
        </Router>
        </Suspense>
       </React.StrictMode>
    );
}

function getCookie(key) {
    if (typeof document !== `undefined`) {
        var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    }
    return b ? b.pop() : "";
}


render(<Base/> ,document.getElementById("root"));
