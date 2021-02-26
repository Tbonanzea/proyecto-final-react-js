import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	useEffect(() => {
		getItems();
	}, []);

	const [item, setItem] = useState([]);

	const { id } = useParams();

	const getItems = () => {
		const fetch = [
			{
				id: 1,
				nombre: "Item 1",
				descripcion: "Descripcion de prueba item 1",
				cilindrada: 200,
				modelo: 2021,
				color: "Azul",
				stock: 12,
				precio: 1000,
				image: null,
			},
			{
				id: 2,
				nombre: "Item 2",
				descripcion: "Descripcion de prueba item 2",
				cilindrada: 200,
				modelo: 2021,
				color: "Azul",
				stock: 10,
				precio: 1100,
				image: null,
			},
			{
				id: 3,
				nombre: "Item 3",
				descripcion: "Descripcion de prueba item 3",
				cilindrada: 200,
				modelo: 2021,
				color: "Azul",
				stock: 3,
				precio: 1110,
				image: null,
			},
			{
				id: 4,
				nombre: "Item 4",
				descripcion: "Descripcion de prueba item 4",
				cilindrada: 200,
				modelo: 2021,
				color: "Azul",
				stock: 7,
				precio: 1111,
				image: null,
			},
			{
				id: 5,
				nombre: "Item 5",
				descripcion: "Descripcion de prueba item 5",
				cilindrada: 200,
				modelo: 2021,
				color: "Azul",
				stock: 5,
				precio: 2000,
				image: null,
			},
		];

		const call = new Promise((res, rej) => {
			res(fetch.filter((i) => i.id === parseInt(id, 10)));
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
