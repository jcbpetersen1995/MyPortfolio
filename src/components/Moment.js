import React from "react";
import Moment from "react-moment";
import "moment-timezone";

function MomentJs() {
  return <Moment className="welcomeDate" format="D MMM YYYY"></Moment>;
}

export default MomentJs;
