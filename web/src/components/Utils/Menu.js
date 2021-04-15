import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';
import Hamburger from '../svg/Hamburger';
import Hamburger2 from '../svg/Hamburger2';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: "#FAFAFA",
        width: '100%',
        alignItems: 'center',
        [theme.breakpoints.up("sm")]:{
            display: 'flex',
            position: "fixed",
        },
        [theme.breakpoints.up('md')]:{
            padding: "1rem 7rem",
        }
    },
    headerOpen:{
        backgroundColor: "#41455c",
        [theme.breakpoints.up('sm')]:{
            backgroundColor: "#FAFAFA"
        }
    },
    headerContent:{
        padding: "1rem 2rem",
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('sm')]:{
             width: '45%',
        },
        [theme.breakpoints.up('md')]:{
            width: '30%'
        }
    },
    rowHeader:{
        alignItems: 'center'
    },
    title:{
        display : 'none',
        [theme.breakpoints.up('sm')]:{
            display: 'flex',
            alignItems : 'center',
            marginLeft: "1rem",
            paddingLeft: '10px',
            fontSize: '1.5rem',
        color: '#41455c',
        borderLeft: "1px solid #41455c",
        height: "3rem",
        }
    },
    rowtitle: {
        fontFamily: "Poppins",
        alignItems: 'center',
        display: 'flex', 
        flexDirection: 'row'
    },
    navbarToggler:{
        [theme.breakpoints.up('sm')]:{
            display:'flex !important'
        }
    },
   navigator:{
       backgroundColor: "#41455c",
       textAlign: "center",
       color: "#FFFFFF",
       padding: "2rem 0",
       [theme.breakpoints.up("sm")]:{
           backgroundColor: "#FAFAFA",
           flexDirection: 'row',
           width: '100%',
           justifyContent: 'space-between',
           padding: "2rem 1rem",
       }
   },
   toggle:{
        border: "none",
        backgroundColor: 'transparent',
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
   },
    li: {
        fontFamily: "Poppins",
        padding: "1rem 0",
        fontSize: "1.2rem",
        color: "#FFFFFF !important", 
        listStyle: "none !important",
        
        [theme.breakpoints.up("sm")]:{
            padding: '0.3rem 1.5rem !important',
            color: "#41455c !important",
            listStyle: "none !important",
            fontSize: '1rem',
            '&:hover' : {
                background: "#FF6565",
                borderRadius: '1rem',
                color: '#FFFFFF !important'
            },
            '&:focus' :{
                background: "#FF6565",
                borderRadius: '1rem',
                color: '#FFFFFF !important'
            },
        }
    }
}));

export default function MenuHeader() {

    const classes = useStyles();
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [active, setActive] = useState(false);

    return(
          
        <nav id="mainNav" className={" navbar-expand-lg fixed-top" }>
                <div className={`justify-content-between m-0 "  ${!menuExpanded ? classes.header : classes.headerOpen}`} width="100%">
                    <div className={"firstDiv " + classes.headerContent}>
                        <div className={"row pl-4 " + classes.rowHeader}>
                            <Link to="concept" smooth={true}>
                                {!menuExpanded ?
                                <img src={"/static/images/logo.png"} alt={"logo shopisan"} width={"65px"}/>
                                :
                                <img src="/static/images/LOGO_BLANC_SHOPISAN.png" width="65px" alt={"logo shopisan"}/>
                            }
                            </Link>
                            <div className={classes.title}>
                                <Typography>SHOPISAN</Typography>
                            </div>
                        </div>
                        <button className={classes.toggle} type="button" data-toggle="collapse"
                                data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                                aria-label="Toggle navigation" onClick={() => {setMenuExpanded(!menuExpanded)}}>
                            
                                {!menuExpanded ?
                                    // <img src="static/images/hamburgerClose.png" width="40px" alt="burger"/>
                                    <Hamburger/>
                                    :
                                    // <img src="static/images/hamburgerOpen.png" width="40px" alt="burger"/>
                                    <Hamburger2/>
                                }
                            
                        </button>
                    </div>
                    <div id="navbarToggler"
                         className={`menu-centered ${!menuExpanded && "collapse "} navbar-collapse justify-content-end ` + classes.navbarToggler}>
                        <ul className={"navbar-nav ml-auto " + classes.navigator}>
                            <li className="nav-item">
                                <NavLink className={"nav-link " + classes.li} to="/" onClick={() => setMenuExpanded()} >Notre concept</NavLink>
                            </li>

                            <li className={"nav-item"}>
                                    <Link className={"nav-link " + classes.li} to={"idea"} smooth={true} onClick={() => setMenuExpanded()}>De l'idée au projet</Link>
                            </li>

                            <li className={"nav-item"}>
                                <NavLink className={"nav-link " + classes.li} to={"/signin"} onClick={() => setMenuExpanded()} >Inscription</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={"nav-link " + classes.li} to="/contact" onClick={() => setMenuExpanded()} >Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                
                </div>
        </nav>
      

    );
}