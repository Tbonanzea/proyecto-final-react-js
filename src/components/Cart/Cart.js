import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, cartContext, handleChange, handleCompra, idOrden }) => {
	const [ordenFinalizada, setOrdenFinalizada] = useState(false);
	const validate = (e) => {
		if (e.target.email.value === e.target.email2.value) {
			handleCompra(e);
			setOrdenFinalizada(true);
			return;
		}
		alert("Deben coincidir ambas direcciones de Email");
	};
	return (
		<div>
			{cart.length > 0 ? (
				<div>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">Cant.</th>
								<th scope="col">Item</th>
								<th scope="col">P. Unitario</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((o) => (
								<tr>
									<td>{o.quantity}</td>
									<td>{o.item.nombre}</td>
									<td>{o.item.precio}</td>
									<button
										className="btn-danger"
										onClick={() =>
											cartContext.removeItem(o.item.id)
										}
									>
										X
									</button>
								</tr>
							))}
						</tbody>
					</table>
					<button onClick={() => cartContext.clear()}>
						Limpiar Carrito
					</button>
					<h2>Total: $ {cartContext.total()}</h2>

					<form onSubmit={validate} className="row">
						<div className="col-12">
							<label>
								Nombre:
								<input
									name="nombre"
									type="text"
									onChange={handleChange}
									required
								/>
							</label>
						</div>
						<div className="col-12">
							<label>
								Apellido:
								<input
									name="apellido"
									type="text"
									onChange={handleChange}
									required
								/>
							</label>
						</div>
						<div className="col-12">
							<label>
								Telefono:
								<input
									name="telefono"
									type="number"
									onChange={handleChange}
									required
								/>
							</label>
						</div>
						<div className="col-12">
							<label>
								Email:
								<input
									name="email"
									type="email"
									onChange={handleChange}
									required
								/>
							</label>
						</div>
						<div className="col-12">
							<label>
								Repetir Email:
								<input name="email2" type="email" required />
							</label>
						</div>
						<input
							className="btn-success ml-2 d-block"
							type="submit"
							value="Confirmar compra"
						/>
						{ordenFinalizada && (
							<h1 className="ml-5">
								EL ID DE SU ORDEN ES: {idOrden}
							</h1>
						)}
					</form>
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
