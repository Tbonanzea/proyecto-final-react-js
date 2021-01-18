import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
	return (
		<React.Fragment>
			<h1>{greeting}</h1>
			<ItemCount stock={12} initial={5} />
		</React.Fragment>
	);
};

export default ItemListContainer;
