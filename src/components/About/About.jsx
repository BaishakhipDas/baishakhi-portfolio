import React from 'react'
import "./About.css"
import Card from '../Card/Card.jsx'
import frontend from '../../assets/htmlcssjs.jpg'
import reactjs from '../../assets/react&js.jpg'
import responsive from '../../assets/responsive.jpg'

const About = () => {
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span> : BAISHAKHI P DAS</li>
              <li><span>AGE</span> : 21 YEARS</li>
              <li><span>GENDER</span> : FEMALE</li>
              <li><span>LANGUAGE KNOWN</span> : ENGLISH , HINDI , ODIA</li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span> : B.TECH</li>
              <li><span>BRANCH</span> : CSE</li>
              <li><span>CGPA</span> : 8.7</li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>FRONTEND DEVELOPMENT</li>
              <li>REACT.JS & JAVASCRIPT</li>
              <li>UI/UX & RESPONSIVE DESIGN</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="FRONTEND DEVELOPMENT" image={frontend} />
        <Card title="REACT.JS & JAVASCRIPT" image={reactjs} />
        <Card title="UI/UX & RESPONSIVE DESIGN" image={responsive} />
      </div>
    </div>
  )
}

export default About
