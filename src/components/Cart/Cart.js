import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, cartContext, handleCompra }) => {
	return (
		<div>
			{cart.length >= 1 ? (
				<div>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Cant.</th>
								<th scope="col">Item</th>
								<th scope="col">P. Unitario</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((o) => (
								<tr>
									<td>{o.quantity}</td>
									<td>{o.item.nombre}</td>
									<td>{o.item.precio}</td>
								</tr>
							))}
						</tbody>
					</table>
					<button
						className="btn-danger mr-2"
						onClick={() => cartContext.removeItem()}
					>
						Borrar último elemento agregado
					</button>
					<button onClick={() => cartContext.clear()}>
						Limpiar Carrito
					</button>
					<button className="btn-success ml-2" onClick={handleCompra}>
						Confirmar compra
					</button>

					<h2>Total: $ {cartContext.total()}</h2>
				</div>
			) : (
				<div className="mt-2 ml-2">
					<h3>No hay Items en tu carrito</h3>
					<Link
						to={`/`}
						className="btn-success rounded-pill mb-2 mt-2 p-3"
					>
						COMENZAR A COMPRAR
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
