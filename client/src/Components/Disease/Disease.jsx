import React, { Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import Precautions from "./Precautions";
import jsPDF from "jspdf";
import parse from "html-react-parser";
import "./Disease.css";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import CircleIcon from "@mui/icons-material/Circle";
import Dashboard from "./Dashboard";
toast.configure();

class Disease extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "",
      blinkrate: "",
      redness: "",
      burning_sensation: "",
      screen_time: "",
      scratchy_level: "",
      blurred_vision: "",
      dryness: "",
      thready_mucus_discharge: "",
      diseaseResult: "None",
      svg: "",
    };
    this.getChart = this.getChart.bind(this);
    this.getReport = this.getReport.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(evt) {
    toast("Details are sent, Please wait!");
    let recRes = "";
    evt.preventDefault();
    const url = "http://localhost:5500/disease";
    const response = await axios.post(url, this.state);
    recRes = response.data;
    console.log(recRes);
    this.setState({
      diseaseResult: response.data,
    });
    this.getChart();
  }
  async getChart() {
    const cn = await axios.get("http://localhost:5500/getchart");
    const data = cn.data;
    this.setState(
      {
        svg: data,
      },
      () => console.log("SVG Received")
    );
  }
  getReport() {
    const doc = new jsPDF();
    let personDetails =
      "Report\n\n" +
      "Name     \t\t\t" +
      this.state.name +
      "\n\n" +
      "Age\t\t\t\t" +
      this.state.age +
      "\n\n" +
      "Gender  \t\t\t" +
      this.state.gender +
      "\n\n" +
      "Blink Rate      \t\t" +
      this.state.blinkrate +
      "\n\n" +
      "Redness\t\t\t" +
      this.state.redness +
      "\n\n" +
      "Burning Sensation \t" +
      this.state.burning_sensation +
      "\n\n" +
      "Screentime     \t\t" +
      this.state.screen_time +
      "\n\n" +
      "Scratchy Sensation\t" +
      this.state.scratchy_level +
      "\n\n" +
      "Thready Dischard   \t" +
      this.state.thready_mucus_discharge +
      "\n\n" +
      "Blurred Vision \t\t" +
      this.state.blurred_vision +
      "\n\n" +
      "Dryness Level \t\t" +
      this.state.diseaseResult +
      "\n\n" +
      "Disease Status\t\t" +
      this.state.diseaseResult +
      "\n\n";

    let precuations =
      "Precautions\n\n1.Avoid air blowing in your eyes\n2.Add moisture to the air\n3.Consider wearing wraparound sunglasses or other protective eyewear\n4.Take eye breaks during long tasks\n5.Be aware of your environment\n6.Position your computer screen below eye level\n7.Stop smoking and avoid smoke\n8.Use artificial tears regularly\n";

    if (
      this.state.diseaseResult === "Mild" ||
      this.state.diseaseResult === "Low" ||
      this.state.diseaseResult === "Medium" ||
      this.state.diseaseResult === "High"
    ) {
      doc.text(personDetails + precuations, 10, 10);
    } else {
      doc.text(personDetails, 10, 10);
    }

    doc.save(`${this.state.name}.pdf`);
  }

  render() {
    return (
      <div className="disease-form-container">
        <div className="row-d">
          <div className="column-d1">
            <h2>Fill The Below Form and Submit The Details</h2>
            <form onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input
                onChange={this.handleChange}
                name="name"
                type="text"
                value={this.state.name}
              />
              <br />
              <label>Age</label>
              <input
                onChange={this.handleChange}
                name="age"
                type="number"
                value={this.state.age}
              />
              <br />
              <label>Gender</label>
              <select
                onChange={this.handleChange}
                name="gender"
                value={this.state.gender}
              >
                <option>Choose</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <br />
              <label>Blink Rate</label>
              <input
                name="blinkrate"
                type="number"
                value={this.state.blinkrate}
                onChange={this.handleChange}
              />
              <br />
              <label>Redness Seen</label>
              <select
                name="redness"
                value={this.state.redness}
                onChange={this.handleChange}
              >
                <option>Choose</option>
                <option>Normal</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <br />
              <label>Burning Sensation</label>
              <select
                name="burning_sensation"
                value={this.state.burning_sensation}
                onChange={this.handleChange}
              >
                <option>Choose</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <br />
              <label>Screen Time Per Day</label>
              <input
                onChange={this.handleChange}
                name="screen_time"
                type="number"
                value={this.state.screen_time}
              />
              <br />
              <label>Scratchy Sensation</label>
              <select
                name="scratchy_level"
                value={this.state.scratchy_level}
                onChange={this.handleChange}
              >
                <option>Choose</option>
                <option>Normal</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <br />
              <label>Mucus Discharge</label>
              <select
                name="thready_mucus_discharge"
                value={this.state.thready_mucus_discharge}
                onChange={this.handleChange}
              >
                <option>Choose</option>
                <option>Normal</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <br />
              <label>Blurred Vision</label>
              <select
                name="blurred_vision"
                value={this.state.blurred_vision}
                onChange={this.handleChange}
              >
                <option>Choose</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <br />
              <Button
                disabled={
                  this.state.blurred_vision.length === 0 ||
                  this.state.thready_mucus_discharge.length === 0 ||
                  this.state.scratchy_level.length === 0 ||
                  this.state.gender.length === 0 ||
                  this.state.redness.length === 0 ||
                  this.state.burning_sensation.length === 0 ||
                  this.state.name.length === 0 ||
                  this.state.age < 0 ||
                  this.state.age.length===0 ||
                  this.state.age === 0 ||
                  this.state.blinkrate < 0 ||
                  this.state.blinkrate.length===0||
                  this.state.blinkrate === 0 ||
                  this.state.screen_time < 0 ||
                  this.state.screen_time.length===0||
                  this.state.screen_time === 0
                    ? true
                    : false
                }
                startIcon={<CircleIcon />}
                size="small"
                id="submit-btn"
                variant="contained"
                type="submit"
                value="Submit"
              >
                Submit
              </Button>{" "}
              <Button
                disabled={
                  this.state.blurred_vision.length === 0 ||
                  this.state.thready_mucus_discharge.length === 0 ||
                  this.state.scratchy_level.length === 0 ||
                  this.state.gender.length === 0 ||
                  this.state.redness.length === 0 ||
                  this.state.burning_sensation.length === 0 ||
                  this.state.name.length === 0 ||
                  this.state.age < 0 ||
                  this.state.age.length===0 ||
                  this.state.age === 0 ||
                  this.state.blinkrate < 0 ||
                  this.state.blinkrate.length===0||
                  this.state.blinkrate === 0 ||
                  this.state.screen_time < 0 ||
                  this.state.screen_time.length===0||
                  this.state.screen_time === 0
                    ? true
                    : false
                }
                startIcon={<DownloadForOfflineIcon />}
                onClick={this.getReport}
                color="error"
                size="small"
                variant="contained"
              >
                Generate Report
              </Button>
            </form>
            <br />
            <h2>Blink Pattern Chart</h2>
            {parse(this.state.svg)}
          </div>
          <div className="column-d2">
            <h2>Dry Eyes Disease Status : {this.state.diseaseResult}</h2>
            {this.state.diseaseResult === "Mild" ||
            this.state.diseaseResult === "Low" ||
            this.state.diseaseResult === "Medium" ||
            this.state.diseaseResult === "High" ? (
              <Precautions />
            ) : (
              <Fragment></Fragment>
            )}
            <br></br>
            <Dashboard
              name={this.state.name}
              age={this.state.age}
              gender={this.state.gender}
              blinkrate={this.state.blinkrate}
              redness={this.state.redness}
              burningsensation={this.state.burning_sensation}
              screentime={this.state.screen_time}
              scratchy={this.state.scratchy_level}
              blurred={this.state.blurred_vision}
              mucus={this.state.thready_mucus_discharge}
              dryness={this.state.diseaseResult}
            />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Disease;
