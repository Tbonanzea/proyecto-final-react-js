import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, cartContext }) => {
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
								<th scope="col">Eliminar</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((o) => (
								<tr>
									<td>{o.quantity}</td>
									<td>{o.item.nombre}</td>
									<td>{o.item.precio}</td>
									<td>
										<button
											className="btn-danger"
											onClick={() =>
												cartContext.removeItem(
													o.item.id
												)
											}
										>
											X
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<button onClick={() => cartContext.clear()}>
						Limpiar Carrito
					</button>
					<h2>Total: $ {cartContext.total()}</h2>
				</div>
			) : (
				<div>
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
