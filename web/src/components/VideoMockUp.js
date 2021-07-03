import React from "react";
import useStyles from '../theme';

export default function VideoMockUp(props){
    const {url} = props;
    const classes = useStyles();

    return (
        <>
            <img className={classes.img} src="/static/images/mockup_iphone_vide.png"></img>
            <div className={classes.contentVideo}>
                <video className={classes.video1} autoPlay loop muted>
                    <source src={url} type="video/mp4"/>
                </video>
            </div>
        </>
    );
}