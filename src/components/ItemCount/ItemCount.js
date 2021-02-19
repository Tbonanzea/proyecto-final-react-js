import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd, agregados }) => {
	const [count, setCount] = useState(1);

	const addCount = () => {
		count < stock && setCount(count + 1);
	};

	const subCount = () => {
		count > 0 && setCount(count - 1);
	};

	const handleAdd = () => {
		onAdd(count);
	};
	return (
		<div id="wrapper" className="text-center p-4">
			<div className="row justify-content-around mt-2">
				<button
					className="col-3 rounded-circle btn-outline-primary"
					onClick={subCount}
				>
					-
				</button>

				<h1 className="col-5">{count}</h1>

				<button
					className="col-3 rounded-circle btn-outline-primary"
					onClick={addCount}
				>
					+
				</button>
			</div>
			<button
				className="btn-success rounded-pill mb-2 mt-2 p-3"
				onClick={handleAdd}
			>
				Agregar al Carrito
			</button>
			{agregados ? (
				<p className="mt-2">{count} items agregados al carrito</p>
			) : (
				<p className="mt-2">No has agregado items al carrito</p>
			)}
		</div>
	);
};

export default ItemCount;
