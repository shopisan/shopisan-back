import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    container: {
        backgroundColor: "#FAFAFA",
        display: 'flex',
        flexDirection: 'column',
        paddingTop: "5rem",
        [theme.breakpoints.up('sm')]: {
            alignItems: "center",
            marginTop: "9vh",
            paddingTop: "0",
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "0vh",

        }
    },
    concept: {
        padding: "15vh 2.5rem",
        [theme.breakpoints.up('sm')]: {
            padding: "0 5rem",
            display: "flex",
            alignItems: 'center'
        },
        [theme.breakpoints.up('md')]: {
            padding: "10rem 7rem"
        },
        [theme.breakpoints.up('lg')]: {
            padding: "10rem 12rem"
        },
        [theme.breakpoints.up('xl')]: {
            padding: "10rem 30rem"
        }
    },
    projectIdea:{
        padding: '15vh 2.5rem',
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row-reverse",
            padding: " 5rem",
            alignItems: "center"
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem 5rem"
        },
        [theme.breakpoints.up('lg')]:{
            padding: "10rem 13rem"
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 30rem"
        }
    },
    addonapp: {
        padding: theme.spacing(5),
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            padding: "5rem"
        },
        [theme.breakpoints.up('md')]:{
            padding: '10rem'
        }
        
    },
    localShopping:{
        padding: '15vh 2.5rem',
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row-reverse",
            padding: "0rem 5rem",
            alignItems: "center"
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem 7rem"
        },
        [theme.breakpoints.up('lg')]:{
            padding: "10rem 10rem"
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 30rem"
        }
    },
    row:{
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
    },
    iconApp:{
        height: "5rem",
        width: "5rem",
        borderRadius: "1.5rem",
        boxShadow: "0px 0px 10px 2px lightgrey",
        padding: "10px 15px",
        backgroundColor: "white",
        marginRight: "1rem"
    },
    h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "2.8rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "3rem"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "5rem"
        }
    },
    h2: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        marginBottom: "8rem",
        color: "#41455c",
        fontSize: "1.2rem",
        [theme.breakpoints.up('sm')]: {
            fontSize: "1.2rem"
        },
        [theme.breakpoints.up('md')]: {
            marginTop: "-10rem",
            fontSize: "1.2rem"
        }
    },
    h3: {
        fontFamily: "Poppins",
        margin:'2rem 0 2rem 0',
        fontWeight: "bold",
        color: "#41455c",
        fontSize: "2.8rem",
        [theme.breakpoints.up('sm')]: {
            width: '75%'
        },
        [theme.breakpoints.up('sm')]: {
            width: '50%'
        }
    },
    body1: {
        fontFamily: "Poppins",
        margin: "2rem 0 0 0",
        fontSize: "0.8rem",
        color: "#41455c",
        lineHeight: "1rem",
        [theme.breakpoints.up('sm')]: {
            lineHeight: "1.2rem",
            width: '80%',
        },
    },
    body2: {
        fontFamily: "Poppins",
        fontSize: "0.8rem",
        color: "#41455c",
        lineHeight: "1rem",
        marginTop: "0.5rem"
    },
    img: {
        zIndex: '2',
        height: '500px',
        [theme.breakpoints.up('sm')]: {
            height: '400px',
            marginLeft: "0"
        },
        [theme.breakpoints.up('md')]: {
            height: '500px'
        }
    },
    contentVideo:{
        background: "FFFFFEF",
        position: 'absolute',
        height: '475px',
        width: '225px',
        borderRadius: '2rem',
        marginTop: '15px',
    },
    video1:{
        height: '470px',
        marginTop: '8px',
        marginLeft: '8px',
        borderRadius: '2rem',
        width: '215px',
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            height: '355px'
        },
        [theme.breakpoints.up('md')]: {
            height: '470px'
        }
    },
    video2:{
        height: '475px',
        marginTop: '12px',
        marginLeft: '9px',
        borderRadius: '2rem',
        width: '210px',
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            height: '351px'
        },
        [theme.breakpoints.up('md')]: {
            height: '475px'
        }
    },
    video3:{
        height: '475px',
        marginTop: '8px',
        marginLeft: '9px',
        borderRadius: '2rem',
        width: '210px',
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            height: '355px'
        },
        [theme.breakpoints.up('md')]: {
            height: '470px'
        }
    },
 
    discover:{
        padding: '15vh 2.5rem',
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.up('sm')]:{
            display: "flex",
            flexDirection: "row",
            padding: "0rem 5rem",
            alignItems: "center"
        },
        [theme.breakpoints.up('md')]:{
            padding: "10rem 7rem"
        },
        [theme.breakpoints.up('lg')]:{
            padding: "10rem 12rem"
        },
        [theme.breakpoints.up('xl')]:{
            padding: "10rem 30rem"
        }
    },
    btnApp:{
        marginTop: "-3.2rem"
    }
}));
