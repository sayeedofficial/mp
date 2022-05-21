import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./TeamCard.css";

function TeamCard({ name, image, linkedin, about }) {
  return (
    <div className="tcard">
      <h1> {name}</h1>
      <br></br>
      <img src={image} alt=" " srcSet="" />
      <br />
      {/* <p>
        {" "}
        <strong>Description:</strong> {about}
      </p>
      <br />
      <strong>Skills : </strong> */}
      <br /> <br />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedInIcon />}
        > Linkedin</Button>
      </a>
    </div>
  );
}

export default TeamCard;
