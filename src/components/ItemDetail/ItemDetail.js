import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Carrousel from "../Carrousel/Carrousel";

const ItemDetail = ({ item }) => {
	return (
		<div className="container-fluid row m-0 p-0 mt-4 mb-4 text-center">
			<h2 className="col-12 mb-4">{item.nombre}</h2>
			<div className="col">
				<Carrousel images={item.images} />
			</div>
			<div className="col-4 justify-content-center text-center">
				<ItemCount stock={item.stock} initial={1} />
				<h3 className="mt-4">${item.precio}</h3>
				<small className="mt-4">Stock: {item.stock} unidades.</small>
				<p className="mt-4">{item.descripcion}</p>
			</div>
		</div>
	);
};

export default ItemDetail;
