import React from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import SaveIcon from "@mui/icons-material/Save";
import "react-toastify/dist/ReactToastify.css";
import "./Try.css";
class Try extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileUrl: "",
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.notify = this.notify.bind(this);
  }

  handleFileUpload(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ fileUrl: `http://localhost:5000/${body.file}` });
      });
    });
  }

  notify() {
    toast("File Uploaded and Sent Successfully");
  }

  render() {
    return (
      <form onSubmit={this.handleFileUpload} className="file-form">
        <div>
          <input
            ref={(ref) => {
              this.uploadInput = ref;
            }}
            type="file"
          />
        </div>

        <br />
        <div>
          <Button onClick={this.notify} type="submit" variant="contained">
            <SaveIcon />{" "} Upload
          </Button>
        </div>
      </form>
    );
  }
}

export default Try;
