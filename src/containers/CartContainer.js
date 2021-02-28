import React, { useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";
import { useCartContext } from "../../src/context/CartContext";
import { getFirestore } from "../firebase";
import firebase from "firebase/app";

const CartContainer = () => {
	const cartContext = useCartContext();

	const cart = cartContext.cart;

	const [orden, setOrden] = useState({});

	const [idOrden, setIdOrden] = useState(0);

	useEffect(() => {
		setOrden({
			comprador: {
				nombre: "Tomas Bonanzea",
				telefono: 3517570903,
				email: "tomasbonanzea98@gmail.com",
			},
			items: cart,
			fecha: firebase.firestore.Timestamp.fromDate(new Date()),
			total: cartContext.total(),
		});
	}, [cart, cartContext]);

	const handleCompra = () => {
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
			handleCompra={handleCompra}
		/>
	);
};

export default CartContainer;
