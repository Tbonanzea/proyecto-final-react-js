import React from "react";
import "./Carrousel.css";
import foto from "../../assets/images/auto.jpg";

const Carrousel = ({ images }) => {
	return (
		<div>
			<img src={foto} className="p-0 m-0 w-100" alt="Foto de producto" />
		</div>
	);
};

export default Carrousel;
