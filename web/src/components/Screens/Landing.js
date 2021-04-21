import React from 'react';
import Concept from '../LandingComponent/Concept';
import ProjectIdea from '../LandingComponent/ProjectIdea';
import AddOnApp from '../LandingComponent/AddOnApp';
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@material-ui/core";



export default function Landing() {

  const {t, i18n} = useTranslation();



  return (
 
    <div className={"container-fluid p-0" }>
      <Concept/>
      <ProjectIdea/>
      <AddOnApp/>
    </div>
    
  )
}
