import { React } from "react";
import "./Item.css";

const Item = ({ item }) => {
	return (
		<div className="card col-4">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.nombre}</h5>
				<p className="card-text">{item.descripcion}</p>
				<a href="#" className="btn btn-outline-primary">
					Ver Detalle
				</a>
			</div>
		</div>
	);
};

export default Item;