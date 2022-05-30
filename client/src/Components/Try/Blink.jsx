import React from "react";
import axios from "axios";
import loading from "./loading.gif";
import { Button } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import Chart from "./Chart"
import "./Blink.css";
class BlinkRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.getBlink = this.getBlink.bind(this);
    this.hitBlink = this.hitBlink.bind(this);
  }

  async getBlink() {
    const cn = await axios.get("http://localhost:5500/blinkcount");
    const data = cn.data;
    this.setState({
      count: data,
    });
  }
  hitBlink() {
    this.setState({ count: -1 });
    this.getBlink();
  }

  render() {
    return (
      <div className="blink-container">
        {this.state.count === -1 ? (
          <img className="loading-img" width="25px" src={loading} alt=" " />
        ) : (
          <h2 style={{ fontSize: "25px" }}> {this.state.count} </h2>
        )}

        <br />
        <Button
          disabled = {this.state.count===-1 ? true : false}
          startIcon={<CircleIcon />}
          color="error"
          size="small"
          variant="contained"
          onClick={this.hitBlink}
        >
          {" "}
          Blink
        </Button>
        <br />
        <br />
        <Chart btnState={this.state.count} />
      </div>
    );
  }
}

export default BlinkRate;
