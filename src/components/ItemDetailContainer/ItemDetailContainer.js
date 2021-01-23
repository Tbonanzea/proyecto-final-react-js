import React from "react";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
	const getItems = () => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				res();
			}, 2000);
			return res;
		});
	};

	return null;
};

export default ItemDetailContainer;
