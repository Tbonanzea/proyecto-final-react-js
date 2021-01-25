import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		db();
	}, []);

	const db = () => {
		const items = [
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
		];

		const call = new Promise((res, rej) => {
			setTimeout(() => {
				res(items);
			}, 2000);
			return res;
		});

		call.then(
			(res) => {
				setProducts(res);
			},
			(err) => {
				console.log(`Error en la ejecucion: ${err}`);
			}
		).catch((err) => console.log(`Error en la ejecucion: ${err}`));
	};

	return <ItemList items={products} />;
};

export default ItemListContainer;
