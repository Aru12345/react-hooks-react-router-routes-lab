import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <h2>Name:Scott Derrickson</h2>
    <p>Movies:</p>
    <ul>
      <li>Doctor Strange</li>
      <li>Sinister</li>
      <li>The Exorcism of Emily Rose</li>
    </ul>

    <h2>Name:Mike Mitchell</h2>
    <p>Movies:</p>
    <ul>
      <li>Trolls</li>
      <li>Alvin and the Chipmunks: Chipwrecked</li>
      <li>Sky High</li>
    </ul>

    <h2>Name:Edward Zwick</h2>
    <p>Movies:</p>
    <ul>
      <li>Jack Reacher</li>
      <li>Never Go Back</li>
      <li>Blood Diamon</li>
      <li>The Siege</li>
    </ul>
  </div>;
}

export default Directors;
