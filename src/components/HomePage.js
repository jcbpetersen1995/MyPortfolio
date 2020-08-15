import React, { Component } from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import MomentJs from './Moment';
import ArrowButton from './ArrowButton';


class HomePage extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Navbar />
        <Welcome />
        {/* <MomentJs /> */}
        {/* <ArrowButton /> */}

        {/* <section className="blockOne">

      </section> */}
      </div>
    );
  }
}

export default HomePage;
