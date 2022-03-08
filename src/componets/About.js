import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "./img/play.png";

function About(){
    return(
      <div className="app">
      <button ><img src={Image}/>
        let's jam
      </button>
    </div>
    );
  }
  
export default About