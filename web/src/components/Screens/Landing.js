import React, {useState} from 'react'
import axios, { post } from 'axios'
import Concept from '../LandingComponent/Concept'
import LocalShopping from '../LandingComponent/LocalShopping'
import Discover from '../LandingComponent/Discover'
import ProjectIdea from '../LandingComponent/ProjectIdea'
import AddOnApp from '../LandingComponent/AddOnApp'

export default function Landing() {

  return (
    <div className={"container-fluid p-0"} >
      <Concept/>
      <LocalShopping/>
      <Discover/>
      <ProjectIdea/>
      <AddOnApp/>
    </div>
  )
}
