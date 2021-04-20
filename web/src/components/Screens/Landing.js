import React from 'react';
import Concept from '../LandingComponent/Concept';
import ProjectIdea from '../LandingComponent/ProjectIdea'
import AddOnApp from '../LandingComponent/AddOnApp'


export default function Landing() {


  return (
    <div className={"container-fluid p-0" }>
      <Concept/>
      <ProjectIdea/>
      <AddOnApp/>
    </div>
  )
}
