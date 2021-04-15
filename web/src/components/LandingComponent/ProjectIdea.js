import React from 'react';
import {makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    projectIdea:{
        padding: '15vh 40px',
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row-reverse",
            padding: "10rem 5rem",
            alignItems: "center"
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem"
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
            fontSize: "5rem",

        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.7rem", 
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]:{
            width: '100%',
            fontSize: "0.8rem",
            lineHeight: "1rem",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "0.9rem",
            width: '80%',
            lineHeight: '1.5rem'
        }
    },
    img:{
        height: '450px',
        marginTop: '2rem',
        [theme.breakpoints.up('sm')]:{
            height: '500px',
            marginLeft : "0"
        },
        [theme.breakpoints.up('md')]: {
            height: '700px'
        }
    }
}))

export default function ProjectIdea(){

    const classes = useStyles();

    return(
        <>
            <div className={classes.projectIdea} id="idea">
                <div>
                    <Typography variant="h1" className={classes.h1}>De l'idée au projet</Typography>
    
                    <Typography variant="body1" className={classes.body1}>Il y a quelques temps, nous étions à la recherche d'un cadeau. Nous promenant au centre de Bruxelles, nous sommes passés devant la vitrine de la boutique Azur Elle. Nous avons franchi la porte et nous avons été chaleureusement acceuillis par le propriétaire. Il était à notre écoute de ce que nous recherchions. Il nous a déniché LA PÉPITE !.</Typography>
                    <Typography variant="body1" className={classes.body1}>Ce qui nous a frappé lors de notre passage chez Azur Elle: la petite taille de la boutique mais une grande originalité, un choix et un accueil personnalisé ! </Typography>
                    <Typography variant="body1" className={classes.body1}>Du constat que nous ne connaissions pas les petits commerces même ceux qui sont situés à proximité, est né le projet de l'application Shopisan.</Typography>
                </div>
       
                <div className= "d-flex justify-content-center" >
            <img className={classes.img} src= "static/images/Iphone_Mockup_2.png"></img>
        </div>
        </div> 
        </>
    )
}