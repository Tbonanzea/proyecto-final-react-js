import React from "react";
import "./Logo.css";
import logo from "../../assets/images/logo.png";

const Logo = () => {
	return (
		<div
			className="logo-main d-flex float-left ml-1 mr-2 rounded"
			id="logo"
		>
			<img src={logo} alt="logo" />
		</div>
	);
};

export default Logo;
