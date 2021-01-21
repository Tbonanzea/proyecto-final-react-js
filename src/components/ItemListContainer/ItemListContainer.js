import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				setItems([
					{
						id: 1,
						nombre: "Item 1",
						descripcion: "Descripcion de prueba item 1",
						precio: 1000,
					},
					{
						id: 2,
						nombre: "Item 2",
						descripcion: "Descripcion de prueba item 2",
						precio: 1100,
					},
					{
						id: 3,
						nombre: "Item 3",
						descripcion: "Descripcion de prueba item 3",
						precio: 1110,
					},
					{
						id: 4,
						nombre: "Item 4",
						descripcion: "Descripcion de prueba item 4",
						precio: 1111,
					},
					{
						id: 5,
						nombre: "Item 5",
						descripcion: "Descripcion de prueba item 5",
						precio: 2000,
					},
				]);
			}, 2000);
		})
			.then(
				() => {},
				(err) => {
					console.log(`Error en la ejecucion: ${err}`);
				}
			)
			.catch((err) => console.log(`Error en la ejecucion: ${err}`));
	}, []);

	return (
		<React.Fragment>
			<ItemList items={items} />
		</React.Fragment>
	);
};

export default ItemListContainer;
