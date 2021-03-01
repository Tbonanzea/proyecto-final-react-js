import React, { useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";
import { useCartContext } from "../../src/context/CartContext";
import { getFirestore } from "../firebase";
import firebase from "firebase/app";

const CartContainer = () => {
	const cartContext = useCartContext();

	const cart = cartContext.cart;

	const [orden, setOrden] = useState({});

	const [idOrden, setIdOrden] = useState(null);

	const [usuario, setUsuario] = useState({});

	const handleChange = (e) => {
		setUsuario({
			...usuario,

			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		setOrden({
			comprador: usuario,
			items: cart,
			fecha: firebase.firestore.Timestamp.fromDate(new Date()),
			total: cartContext.total(),
			estado: "generada",
		});
	}, [cart, cartContext, usuario]);

	const handleCompra = (e) => {
		e.preventDefault();
		const db = getFirestore();
		const ordenes = db.collection("ordenes");

		ordenes
			.add(orden)
			.then(({ id }) => {
				setIdOrden(id);
			})
			.catch((err) => {
				console.log(`Error: ${err}`);
			});
	};

	return (
		<Cart
			cart={cart}
			cartContext={cartContext}
			handleChange={handleChange}
			handleCompra={handleCompra}
			idOrden={idOrden}
		/>
	);
};

export default CartContainer;
