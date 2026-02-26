import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'
import githubprofilefinder from '../../assets/githubprofilefinder.jpg'
import loginsignuppage from '../../assets/loginsignuppage.jpg'
import weatherapp from '../../assets/weatherapp.jpg'
import spotifyclone from '../../assets/spotifyclone.jpg'

function Projects() {
  return (
    <div id='projects'>
      <h2>1+ YEARS EXPERIENCED IN PROJECTS</h2>
      <div className="slider">
      <Card title="GITHUB PROFILE FINDER" image={githubprofilefinder}/>
      <Card title="LOGIN & sIGNUP PAGE" image={loginsignuppage} />
      <Card title="WEATHER APP" image={weatherapp} />
      <Card title="SPOTIFY CLONE" image={spotifyclone} />
      </div>
    </div>
  )
}

export default Projects
