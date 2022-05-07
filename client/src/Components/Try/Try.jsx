import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import BlinkRate from "./Blink";
import SaveIcon from "@mui/icons-material/Save";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Try.css";

toast.configure();

function Try() {
	const [file, setFile] = useState();
	const [fileName, setFileName] = useState("");

	const saveFile = (e) => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	const uploadFile = async (e) => {
		toast("File Uploaded Successfully");
		const formData = new FormData();
		formData.append("file", file);
		formData.append("fileName", fileName);
		try {
			const res = await axios.post("http://localhost:5500/upload", formData);
			console.log(res);
		} catch (ex) {
			console.log(ex);
		}
	};

	return (
		<div>
			<div className="fileform-container">
      <h4>Upload the Text File Containing Blink and Voltage Values </h4>
				<input type="file" onChange={saveFile} className="custom-file-input" />

				<Button
					size="small"
					startIcon={<SaveIcon />}
					variant="contained"
					onClick={uploadFile}
				>
					Upload
				</Button>
				
				<br />
			</div>
			<BlinkRate />
		</div>
	);
}

export default Try;
