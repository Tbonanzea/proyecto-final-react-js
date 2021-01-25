import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	useEffect(() => {
		getItems();
	}, []);

	const [item, setItem] = useState([]);

	const getItems = () => {
		const getRandomArbitrary = (min, max) => {
			return Math.floor(Math.random() * (max - min) + min);
		};

		const fetch = [
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
			const random = getRandomArbitrary(1, 6);
			console.log(random);
			setTimeout(() => {
				res(fetch.filter((i) => i.id === random));
			}, 2000);
			return res;
		});

		call.then(
			(res) => {
				setItem(res[0]);
			},
			(err) => {
				console.log(`Error en la ejecucion: ${err}`);
			}
		).finally(console.log(item));
	};

	return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
