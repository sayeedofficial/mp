import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { Button } from "@mui/material";
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
    const data = cn.data;
    this.setState(
      {
        svg: data,
      },
      () => console.log(this.state.svg)
    );
  }
  hitChart() {
    this.getChart();
  }

  render() {
    return (
      <div className="blink-container">
        <Button
          startIcon={<InsertChartIcon />}
          color="primary"
          size="small"
          variant="contained"
          onClick={this.hitChart}
          disabled={this.props.btnState === -1 ? true : false}
        >
          {" "}
          Chart
        </Button>
        <br />
        <br />

        <h2>Blink Pattern Chart</h2>
        {parse(this.state.svg)}
      </div>
    );
  }
}

export default Chart;
