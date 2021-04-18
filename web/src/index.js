import React from "react";
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
import PolitiqueConfidentialte from "./components/Screens/PolitiqueConfidentialite";
import ConditionsGenerales from "./components/Screens/ConditionsGenerales";
import ScrollToTop from "./components/Utils/ScrollToTop";



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
        <Router >
            <ThemeProvider theme={theme}>
                <ScrollToTop/>
           <MenuHeader/>
           <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/confidPol' component={PolitiqueConfidentialte}/>
            <Route path='/generalCond' component={ConditionsGenerales}/>
           </Switch>
            <Footer/>
    </ThemeProvider> 
        </Router>
      
    </React.StrictMode>,
    

document.getElementById("root")
);
