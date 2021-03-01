import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

const NavBar = () => {
	const contextCart = useCartContext();
	const [categorias, setCategories] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const categories = db.collection("categorias");
		categories.get().then((querySnapshot) => {
			querySnapshot.size === 0 && console.log("No hay resultados");
			let result = querySnapshot.docs.map((doc) => {
				return {
					catId: doc.id,
					...doc.data(),
				};
			});
			setCategories(result);
		});
	}, []);

	return (
		<Navbar className="navbar row navbar-dark bg-dark" expand="lg">
			<Link to={`/`}>
				<Navbar.Brand
					href="#"
					className="d-flex align-items-center col-2"
				>
					<Logo /> <span>MotoMania</span>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto col-8">
					<Link
						to={`/`}
						className="d-flex ml-3 align-middle"
						id="home"
					>
						<p>Home</p>
					</Link>
					<NavDropdown
						title="Categorías"
						id="basic-nav-dropdown"
						className="row ml-3"
					>
						{categorias.map((cat) => {
							return (
								<NavLink
									key={cat.catId}
									to={`/category/${cat.nombre}/${cat.catId}`}
									activeClassName="currentCategory"
									className="d-flex align-middle ml-2 mr-2"
								>
									<p className="m-0 mt-1">{cat.nombre}</p>
								</NavLink>
							);
						})}
					</NavDropdown>
					<Link className="ml-3">
						<Nav.Link>Contacto</Nav.Link>
					</Link>
				</Nav>
				<Nav.Link className="d-flex col-2 justify-content-end">
					<Link to={`/cart`}>
						<CartWidget className="" /> | Items:{" "}
						{contextCart.totItems()}
					</Link>
				</Nav.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
