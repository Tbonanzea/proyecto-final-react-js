import React from "react";
import "./Logo.css";
import logo from "../../assets/images/1.png";

const Logo = () => {
	return (
		<div className="logo-main d-flex float-left ml-1 mr-2">
			<img src={logo} />
		</div>
	);
};

export default Logo;
