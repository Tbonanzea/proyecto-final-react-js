import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const items = [
		{ nombre: "Item 1", descripcion: "Descripcion de prueba item 1" },
		{ nombre: "Item 2", descripcion: "Descripcion de prueba item 2" },
		{ nombre: "Item 3", descripcion: "Descripcion de prueba item 3" },
		{ nombre: "Item 4", descripcion: "Descripcion de prueba item 4" },
	];
	return (
		<React.Fragment>
			<ItemList items={items} />
		</React.Fragment>
	);
};

export default ItemListContainer;
