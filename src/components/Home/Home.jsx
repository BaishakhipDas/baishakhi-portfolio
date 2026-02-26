import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import {TypeAnimation} from "react-type-animation";

const Home = () => {
  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
            <div className="line1">I'm</div>
            <div className="line2">Baishakhi P Das</div>
            <div className="line3">
                <TypeAnimation
                    sequence={['FRONTEND DEVELOPER',1000,'',500]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
