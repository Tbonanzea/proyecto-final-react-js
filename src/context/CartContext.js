import React from "react";
import { useState, useEffect, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ defaultValue = [], children }) => {
	const [cart, setCart] = useState(defaultValue);

	const total = () => {
		let acc = 0;
		cart.map((o) => (acc = acc + o.item.precio * o.quantity));
		return acc;
	};
	
	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			isInCart(item.id).quantity += quantity;
			setCart([...cart]);
		} else {
			setCart([...cart, { quantity, item: item }]);
		}
	};

	const removeItem = (itemId) => {
		cart.splice(
			cart.findIndex((i) => i.id === itemId),
			1
		);

		setCart([...cart]);
	};

	const isInCart = (id) => {
		cart.find((o) => o.item.id === id);
	};

	const clear = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addItem,
				total,
				removeItem,
				isInCart,
				clear,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
