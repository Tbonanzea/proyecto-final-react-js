import React from "react";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
	return (
		<Navbar className="navbar row navbar-dark bg-dark" expand="lg">
			<Navbar.Brand href="#" className="d-flex align-items-center col-2">
				<Logo /> ProyectoFinal
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto col-8">
					<Nav.Link href="#">Home</Nav.Link>
					<NavDropdown title="Productos" id="basic-nav-dropdown">
						<NavDropdown.Item href="#">
							Categoría 1
						</NavDropdown.Item>
						<NavDropdown.Item href="#">
							Categoría 2
						</NavDropdown.Item>
						<NavDropdown.Item href="#">
							Categoría 3
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#">
							Todos los productos
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href="#">Contacto</Nav.Link>
				</Nav>
				<Nav.Link className="d-flex col-2 justify-content-end">
					<a className="">
						<CartWidget className="" /> | Items: 0
					</a>
				</Nav.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
