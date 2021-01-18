import React, { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
	const [count, setCount] = useState(initial);

	const addCount = () => {
		count < stock && setCount(count + 1);
	};

	const subCount = () => {
		count > 0 && setCount(count - 1);
	};

	const onAdd = () => {};

	return (
		<div id="wrapper" className="col-3 text-center">
			<div className="row">
				<button className="col" onClick={subCount}>
					-
				</button>

				<h1 className="col">{count}</h1>

				<button className="col" onClick={addCount}>
					+
				</button>
			</div>
			<button className="btn-primary rounded-pill" onClick={onAdd}>
				Agregar al Carrito
			</button>
		</div>
	);
};

export default ItemCount;
