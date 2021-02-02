import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Carrousel from "../Carrousel/Carrousel";

const ItemDetail = ({ item }) => {
	const [itemsSolicitados, setItemsSolicitados] = useState(0)
	
	const [count, setCount] = useState(1);

	const [agregados, setAgregados] = useState(false);

	const addCount = () => {
		count < item.stock && setCount(count + 1);
	};

	const subCount = () => {
		count > 0 && setCount(count - 1);
	};

	const onAdd = (cant) => {
		setItemsSolicitados(cant)
	};
	return (
		<div className="container-fluid row m-0 p-0 mt-4 mb-4 text-center">
			<div className="col-md">
				<Carrousel images={item.image} />
			</div>
			<div className="col-md-4 justify-content-center text-center">
				<h2 className="col-12 mt-3 mt-md-0 mb-4">{item.nombre}</h2>
				<ItemCount subCount={subCount} addCount={addCount} onAdd={onAdd} count={count} agregados={agregados}/>
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
