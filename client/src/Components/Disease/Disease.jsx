import React from "react";

import { Button } from "@mui/material";
import "./Disease.css";

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
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	handleSubmit(evt) {
		evt.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div className="disease-form-container">
				<form onSubmit={this.handleSubmit}>
					<label>Age</label>
					<input
						onChange={this.handleChange}
						name="age"
						type="text"
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
						type="text"
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
						type="text"
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
						Check
					</Button>
				</form>
			</div>
		);
	}
}

export default Disease;
