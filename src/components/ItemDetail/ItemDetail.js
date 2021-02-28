import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ item, existe }) => {
	const cartContext = useCartContext();

	const [count, setCount] = useState(1);

	const [agregados, setAgregados] = useState(false);

	const onAdd = (cant) => {
		setCount(cant);
		setAgregados(true);
		item.stock -= cant;
		cartContext.addItem(item, cant);
	};

	return !existe ? (
		<div className="mt-2 ml-2">
			<h3>EL ITEM SELECCIONADO NO EXISTE</h3>
			<Link
				to={`/`}
				className="d-inline-block btn-success rounded-pill mb-2 mt-2 p-3"
			>
				COMENZAR A COMPRAR
			</Link>
		</div>
	) : (
		<div className="container-fluid row m-0 p-0 mt-4 mb-4 text-center">
			<div className="col-md">
				<img
					className="col-12 img-fluid"
					src={item.imagenes}
					alt={item.nombre}
				/>
			</div>
			<div className="col-md-4 justify-content-center text-center">
				<h2 className="col-12 mt-3 mt-md-0 mb-4">{item.nombre}</h2>
				{agregados ? (
					<Link
						to={`/cart`}
						className="btn-success rounded-pill mb-2 mt-2 p-3"
					>
						TERMINAR MI COMPRA
					</Link>
				) : (
					<ItemCount
						stock={item.stock}
						onAdd={onAdd}
						count={count}
						agregados={agregados}
					/>
				)}
				<h3 className="mt-4">${item.precio}</h3>
				<small className="mt-4">Stock: {item.stock} unidades.</small>
				<p className="mt-4">{item.descripcion}</p>
				<div className="text-left">
					<hr />
					<p>
						<b>Color:</b> {item.color}
					</p>
					<hr />
					<p>
						<b>Cilindrada:</b> {item.cilindrada}
					</p>
					<hr />
					<p>
						<b>Modelo:</b> {item.modelo}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
