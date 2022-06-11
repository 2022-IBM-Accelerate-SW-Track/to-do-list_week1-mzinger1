import React, { Component } from 'react';
import profile_image from '../assets/MichelleZinger.jpg';
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div class = "main">
        <h1 class = "topic">About Me</h1> 
        <div class = "name_title">Michelle Zinger</div>
        <ul>
        <p class = "brief_description"> I am a rising Junior at Northeastern University in Boston, MA.</p>
        <p class = "brief_description"> I am studying Computer Science with a concentration in Software.</p>
        <p class = "brief_description"> I am originally from Westchester, NY.</p>
        </ul>
        <div class = "profile_img"><img src={profile_image} alt="Profile"/></div>
        <div>
          <p>Connect with Me!</p>
          <button type = "button"><a href="https://www.linkedin.com/in/michellezinger23/">LinkedIn</a></button>
          <button type = "button"><a href="https://github.com/mzinger1">Github</a></button>
        </div>
      </div>
    )
  }
}