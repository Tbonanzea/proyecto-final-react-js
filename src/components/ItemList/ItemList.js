import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = (items) => {
	return (
		<div className="container row">
			{items.map((item) => (
				<Item item={item} />
			))}
		</div>
	);
};

export default ItemList;
