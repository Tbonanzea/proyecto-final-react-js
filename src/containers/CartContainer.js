import React, { useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";
import { useCartContext } from "../../src/context/CartContext";

const CartContainer = () => {
	const cartContext = useCartContext();

	const cart = cartContext.cart;

	return <Cart cart={cart} cartContext={cartContext} />;
};

export default CartContainer;
