import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/">
				<h2>EOG Blink Finder</h2>
			</Link>

			<ul>
				<li id="home-btn">
					<Link to="/">
						{" "}
						<i className="fas fa-home"> </i> Home
					</Link>
				</li>
				<li>
					<Link to="/try">
						{" "}
						<i className="fas fa-vial"></i> Try
					</Link>
				</li>
				<li>
					<Link to="/disease">
						{" "}
						<i className="fa-solid fa-briefcase-medical"></i> Disease
					</Link>
				</li>

				<li>
					<Link to="/team">
						{" "}
						<i className="fa-solid fa-user"></i> Team
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
