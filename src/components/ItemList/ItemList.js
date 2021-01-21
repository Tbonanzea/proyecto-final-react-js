import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
	return (
		<div className="container-fluid m-0 p-0 row justify-content-around">
			{items && items.map((item) => <Item key={item.id} item={item} />)}
		</div>
	);
};

export default ItemList;
