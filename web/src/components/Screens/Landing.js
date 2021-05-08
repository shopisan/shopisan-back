import React from 'react';
import Concept from '../LandingComponent/Concept';
import ProjectIdea from '../LandingComponent/ProjectIdea';
import AddOnApp from '../LandingComponent/AddOnApp';
import { useTranslation } from 'react-i18next';

export default function Landing() {

  const {t, i18n} = useTranslation();

  /*const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
      <button type="button" onClick={() => changeLanguage('fr')}>
          fr
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>*/

  return (
 
    <div className={"container-fluid p-0" }>
      <Concept/>
      <ProjectIdea/>
      <AddOnApp/>
    </div>
    
  )
}
