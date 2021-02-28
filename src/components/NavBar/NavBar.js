import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const NavBar = () => {
	const contextCart = useCartContext();
	const [categorias, setCategorias] = useState([]);
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
						{categorias.forEach((cat) => {
							return (
								<NavLink
									to={`/category/${cat.nombre}`}
									activeClassName="currentCategory"
									className="d-flex align-middle ml-2 mr-2"
								>
									<p className="m-0 mt-1">{cat.nombre}</p>
								</NavLink>
							);
						})}
						{/* 
						<NavLink
							to={`/category/1`}
							activeClassName="currentCategory"
							className="d-flex align-middle ml-2 mr-2"
						>
							<p className="m-0 mt-1">Pista</p>
						</NavLink>
						<NavLink
							to={`/category/2`}
							activeClassName="currentCategory"
							className="d-flex align-middle ml-2 mr-2"
						>
							<p className="m-0 mt-1">Naked</p>
						</NavLink>
						<NavLink
							to={`/category/3`}
							activeClassName="currentCategory"
							className="d-flex align-middle ml-2 mr-2"
						>
							<p className="m-0 mt-1">Adventure</p>
						</NavLink>
						<NavLink
							to={`/category/4`}
							activeClassName="currentCategory"
							className="d-flex align-middle ml-2 mr-2"
						>
							<p className="m-0 mt-1">Custom</p>
						</NavLink>
						<NavDropdown.Divider />
						<NavLink
							to={`/`}
							activeClassName="currentCategory"
							className="d-flex align-middle ml-2 mr-2"
						>
							<p className="m-0">Todos los productos</p>
						</NavLink> */}
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
