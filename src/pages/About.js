import React, { Component } from 'react';
import profile_image from '../../src/MichelleZinger.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About me: </h1> 
        <li>
        <p> I am a rising Junior at Northeastern University in Boston, MA. </p>
        <p> I am studying Computer Science with a concentration in Software. </p>
        <p> I am originally from Westchester, NY.</p>
        </li>
        <img src={profile_image} alt="Profile" width = "270" height = "400"/>;
      </div>
    )
  }
}