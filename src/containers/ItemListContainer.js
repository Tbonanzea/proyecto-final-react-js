import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		let itemCollection;
		if (id) {
			itemCollection = db
				.collection("items")
				.where("idCategoria", "==", id);
		} else {
			itemCollection = db.collection("items");
		}

		itemCollection
			.get()
			.then((querySnapshot) => {
				querySnapshot.size === 0 && console.log("error no hay items");
				let itemsArray = querySnapshot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				});
				setProducts(itemsArray);
			})
			.catch((err) => {
				console.log("Error", err);
			});
	}, [id]);

	return <ItemList items={products} />;
};

export default ItemListContainer;
