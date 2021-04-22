import React, { Suspense } from "react";
import {render} from "react-dom"
import './css/index.scss'
import Landing from "./components/Screens/Landing"
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "react-bootstrap";
import MenuHeader from "./components/Utils/Menu";
import SignIn from "./components/Screens/SignIn";
import Footer from './components/Utils/Footer';
import Contact from "./components/Screens/Contact";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PrivacyPolicy from "./components/Screens/PrivacyPolicy";
import GeneralsConditions from "./components/Screens/GeneralsConditions";
import ScrollToTop from "./components/Utils/ScrollToTop";
import { CookieBanner } from '@palmabit/react-cookie-law';
import './i18n';
import Register from "./components/Auth/Register";

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

render(
    <React.StrictMode>
        <Suspense fallback={(<div>Loading...</div>)}>
             <CookieBanner
                message="Ce site web utilise des Cookies. Certains sont utilisés à des fins statistiques et d’autres sont mis en place par des services tiers. En cliquant sur ‘Accept all ‘, vous acceptez l’utilisation de cookies"
                privacyPolicyLinkText="Cookies policy"
                policyLink="/privacy_policy"
                statisticsOptionText="Statistics"
                managePreferencesButtonText="Manage my cookies"
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
                padding: "1rem",
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
                color: '#black !important',
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
        <Router >
            <ThemeProvider theme={theme}>
                <ScrollToTop/>
                <MenuHeader/>
                <Switch>
                    <Route exact path='/' component={Landing}/>
                    <Route path='/signin' component={SignIn}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/privacy_policy' component={PrivacyPolicy}/>
                    <Route path='/generals_conditions' component={GeneralsConditions}/>
                </Switch>
                <Footer/>
            </ThemeProvider> 
        </Router>
        </Suspense>
       </React.StrictMode>,
    

document.getElementById("root")
);
