import React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import svg from "svg";
import "./Blink.css";
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      svg: "",
    };
    this.getChart = this.getChart.bind(this);
    this.hitChart = this.hitChart.bind(this);
  }

  async getChart() {
    const cn = await axios.get("http://localhost:5500/getchart");
    console.log(cn.data);
    const data = cn.data;
    var elem = svg(data);
    this.setState({
      svg: elem,
    });
  }
  hitChart() {
    this.getChart();
  }

  render() {
    return (
      <div className="blink-container">
        {/* <a
          rel="noreferrer"
          target="_self"
          href="http://localhost:5500/getchart"
        >
          
        </a> */}
        <Button
          href="http://localhost:5500/getchart"
          target="_blank"
            color="primary"
            size="small"
            variant="contained"
            onClick={this.hitChart}
          >
            {" "}
            Display Chart 
          </Button>
        <img src={this.state.svg} alt="" />
      </div>
    );
  }
}

export default Chart;
