import { Container } from "@material-ui/core";
import React, {Component} from "react";

class SVGLoader extends Component{
    render() {
        return (
            <Container maxWidth="sm" style={{display: "flex", justifyContent: 'center', minHeight: '45vh', alignItems: "flex-end"}}>
                <div className="lds-ellipsis">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </Container>
        );
    }
}

export default SVGLoader;
