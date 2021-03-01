import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemDetailContainer = () => {
	const [item, setItem] = useState({});

	const { id } = useParams();

	const [existe, setExiste] = useState(true);

	useEffect(() => {
		const db = getFirestore();

		const itemsCollection = db.collection("items");
		const prod = itemsCollection.doc(id);

		prod.get()
			.then((doc) => {
				if (!doc.exists) {
					console.log("Este Item no existe");
					setExiste(false);
					return;
				}
				setItem({ id: doc.id, ...doc.data() });
			})
			.catch((err) => {
				console.log("Error", err);
			});
	}, [id]);

	return <ItemDetail item={item} existe={existe} />;
};

export default ItemDetailContainer;
