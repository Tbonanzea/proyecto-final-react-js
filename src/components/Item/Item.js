import { React } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<div className="card col-3 mt-5 ml-2 pt-3">
			<img src={item.imagenes} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.nombre}</h5>
				<p className="card-text">{item.descripcion}</p>
				<h3 className="card-text">$ {item.precio}</h3>
				<Link
					to={`/item/${item.id}`}
					className="btn btn-outline-primary"
				>
					Ver Detalle
				</Link>
			</div>
		</div>
	);
};

export default Item;
