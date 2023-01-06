import React from "react";
import aboutImage from "../assets/about.jpg"

function About() {
  return (
    <div className="aboutContainer">
      <img src={aboutImage} alt="" className="aboutImage"/>

      <div className="aboutParag">
      <h1>
        About Software Developer <span>ABDELLAOUI Islem</span>
      </h1>
        <h2>Hi, I'am Islem ! </h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I know Html5, CSS3, Javascript, ReactJS, Python, MongoDB, SQL...
        </h4>
      </div>
    </div>
  );
}

export default About;
