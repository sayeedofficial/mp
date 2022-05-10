import React, { Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import Precautions from "./Precautions";
import "./Disease.css";

toast.configure();

class Disease extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: " ",
			gender: " ",
			blinkrate: " ",
			redness: " ",
			burning_sensation: " ",
			screen_time: " ",
			scratchy_level: " ",
			blurred_vision: " ",
			dryness: " ",
			diseaseResult: "None",
		};
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
		console.log(this.state);
	}

	render() {
		return (
			<div className="disease-form-container">
				<div className="row-d">
					<div className="column-d1">
						<h3>Fill The Below Form and Submit The Details</h3>
						<form onSubmit={this.handleSubmit}>
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

							<label>Scratchy Sensation Seen</label>
							<select
								name="scratchy_level"
								value={this.state.scratchy_level}
								onChange={this.handleChange}
							>
								<option>Choose</option>
								<option>Low</option>
								<option>Medium</option>
								<option>High</option>
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

							<label>Dryness Level ?</label>
							<select
								name="dryness"
								value={this.state.dryness}
								onChange={this.handleChange}
							>
								<option>Choose</option>
								<option>Normal</option>
								<option>Mild</option>
								<option>Moderate</option>
								<option>Severe</option>
							</select>
							<br />
							<Button
								size="small"
								id="submit-btn"
								variant="contained"
								type="submit"
								value="Submit"
							>
								Submit
							</Button>
						</form>
					</div>
					<div className="column-d2">
						<h3>Result : {this.state.diseaseResult}</h3>
						{this.state.diseaseResult==="Yes" ? <Precautions/> : <></>}
					</div>
				</div>
			</div>
		);
	}
}

export default Disease;
