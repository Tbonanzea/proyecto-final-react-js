import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
	return (
		<Navbar className="navbar navbar-dark bg-dark" expand="lg">
			<Navbar.Brand href="#">ProyectoFinal</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
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
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
