import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import BlinkRate from "./Blink";
import SaveIcon from "@mui/icons-material/Save";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Try.css";
import Chart from "./Chart";

toast.configure();

function Try() {
  const [file, setFile] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      toast("File Uploaded Successfully");
      const res = await axios.post("http://localhost:5500/upload", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <div className="fileform-container">
        <h4>Upload the Text File Containing Time and Voltage Values </h4>
        <input
        id="eog-file"
          accept={[".txt"]}
          type="file"
          onChange={saveFile}
          className="custom-file-input"
        />

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
      <Chart />
    </div>
  );
}

export default Try;
