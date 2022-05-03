import React from "react";
import "./Disease.css";

class Disease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Enter the Following Details</h2>
        <div className="Disease-form"></div>
      </div>
    );
  }
}

export default Disease;
