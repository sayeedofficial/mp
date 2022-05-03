import React from "react";
import axios from "axios";

import { Button } from "@mui/material";
class BlinkRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.getBlink = this.getBlink.bind(this);
  }

  async getBlink() {
    const cn = await axios.get("http://localhost:5500/blinkcount");
    const data = cn.data;
    console.log(cn);
    this.setState({
      count: data,
    });
  }

  render() {
    return (
      <div>
        <h2> {this.state.count} </h2>
        <br />
        <Button
          color="success"
          size="small"
          variant="contained"
          onClick={this.getBlink}
        >
          {" "}
          Get Blink Count
        </Button>
      </div>
    );
  }
}

export default BlinkRate;
