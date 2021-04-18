import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LocalShopping from '../LandingComponent/LocalShopping'
import Discover from '../LandingComponent/Discover'
import ProjectIdea from '../LandingComponent/ProjectIdea'



const useStyles = makeStyles(theme => ({
    container:{
        backgroundColor: "#FAFAFA",
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]:{
            alignItems: "center",
            marginTop: "10vh",
        },
        [theme.breakpoints.up('md')]:{
            marginTop: "0vh",
         
        }
    },
    concept:{
        padding: "15vh 40px",
        [theme.breakpoints.up('sm')]:{
            padding: "0 5rem",
            display: "flex",
            alignItems: 'center'
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem"
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 20rem"
        }
    },
    h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "2.5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "3rem"
        },
        [theme.breakpoints.up('md')]:{
            fontSize: "5rem"
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
            width: '80%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            lineHeight: '1.5rem'
        }
    },
    img:{
        height: '500px',
        [theme.breakpoints.up('sm')]:{
            height: '600px',
            marginLeft : "0"
        },
        [theme.breakpoints.up('md')]: {
            height: '700px'
        }
    }
}))

export default function Concept() {

    const classes = useStyles();

    return(
        
            <div className={classes.container} id="concept">
                <div className={classes.concept}>
                    <div>
                         <Typography  className={classes.h1}>Le concept</Typography>
                    <Typography className={classes.body1}>(Re)découvrez les boutiques de proximité à grande échelle locale!</Typography>
                    <Typography className={classes.body1}>Vous êtes à la recherche de produits durables Made in France - Made in Belgium, d' articles vintage, de mode, de bijoux ou de cosmétiques et biens d'autres choses ?</Typography>
                    </div>
                   <div className= "d-flex justify-content-center" >
                    <img className={classes.img} src= "static/images/Iphone_Mockup .png"></img>
                </div>
                </div>
                
                <LocalShopping/>
      <Discover/>
      <ProjectIdea/>
        </div> 
       
    )
    
}