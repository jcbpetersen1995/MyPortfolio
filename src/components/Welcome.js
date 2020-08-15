import React from "react";
import "../css/app.css";
import ArrowButton from './ArrowButton';

function Welcome() {
  return (
    <section>
      <div className="welcomeBlock">
        <h1 className="welcome">WELCOME</h1>
        <br />
        <br />
        <br />
        <p className="monochromeText">
          TO A <span className="rainbowText">MONOCHROMATIC</span> EXPERIENCE.
        </p>
        <ArrowButton />
      </div>
    </section>
  );
}

export default Welcome;
