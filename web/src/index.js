import React, { Suspense, lazy } from "react";
import {render} from "react-dom"
import './css/index.scss'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import './i18n';
import { useTranslation } from "react-i18next";
import {Helmet} from "react-helmet";
import CustomCookieBanner from "./components/Utils/CookieBanner";

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

    return (
        // <React.StrictMode>
        <Suspense fallback={(<div>Loading...</div>)}>
        <CustomCookieBanner/>
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
    //    </React.StrictMode>
    );
}

function getCookie(key) {
    if (typeof document !== `undefined`) {
        var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    }
    return b ? b.pop() : "";
}


render(<Base/> ,document.getElementById("root"));
