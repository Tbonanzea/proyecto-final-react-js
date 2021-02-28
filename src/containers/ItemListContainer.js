import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	const { categoryId } = useParams();

	console.log(`Categoria: ${categoryId}`);

	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = db.collection("items").where("stock", ">", 0);
		itemsCollection
			.get()
			.then((query) => {
				if (query.size === 0) {
					console.log("Sin resultados");
				}
				let itemsArray = query.docs.map((doc) => {
					return { id: doc.id, ...doc.data() };
				});
				console.log(itemsArray);
				setProducts(itemsArray);
			})
			.catch((err) => {
				console.log("Error", err);
			});
	}, []);

	return <ItemList items={products} />;
};

export default ItemListContainer;
