import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContainer from "./containers/CartContainer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<ItemListContainer />
					</Route>
					<Route path="/category/:id">
						<ItemListContainer />
					</Route>
					<Route path="/item/:id">
						<ItemDetailContainer />
					</Route>
					<Route path="/cart">
						<CartContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
