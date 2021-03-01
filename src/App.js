import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContainer from "./containers/CartContainer";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<CartProvider>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<ItemListContainer />
						</Route>
						<Route path="/category/:nombre/:id">
							<ItemListContainer />
						</Route>
						<Route path="/item/:id">
							<ItemDetailContainer />
						</Route>
						<Route path="/cart">
							<CartContainer />
						</Route>
					</Switch>
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
