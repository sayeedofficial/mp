import React from "react";
import "./Disease.css";

class Disease extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 0,
			gender: null,
			blinkrate: 0,
		};
	}

	render() {
		return (
			<div className="disease-form-container">
				<form>
					<label>Age</label>
					<input type="text"/>

					<br />

					<label>Gender</label>
					<select >
						<option>Male</option>
						<option>Female</option>
					</select>

					<br />
					<label>Blink Rate</label>
					<input type="number"/>

					<br />

					<label>Redness Seen</label>
					<select>
						<option>Low</option>
						<option>Medium</option>
						<option>High</option>
					</select>

					<br />

					<label>Burning Sensation</label>
					<select>
						<option>Yes</option>
						<option>No</option>
					</select>

					<br />

					<label>Scratchy Sensation Seen</label>
					<select>
						<option>Low</option>
						<option>Medium</option>
						<option>High</option>
					</select>

					<br />

					<label>Screen Time Per Day</label>
					<input type="number" id="screentime" />

					<br />

					<label>Blurred Vision</label>
					<select>
						<option>Yes</option>
						<option>No</option>
					</select>

					<br />

					<label>Do you have Dry Eyes ?</label>
					<select>
						<option>Normal</option>
						<option>Mild</option>
						<option>Moderate</option>
						<option>Severe</option>
					</select>
				</form>
			</div>
		);
	}
}

export default Disease;
