import React, {useState} from 'react'
import axios, { post } from 'axios';
import { makeStyles } from "@material-ui/core";
import Concept from '../LandingComponent/Concept'

import AddOnApp from '../LandingComponent/AddOnApp'


export default function Landing() {


  return (
    <div className={"container-fluid p-0" }>
      <Concept/>
    
      <AddOnApp/>
    </div>
  )
}
