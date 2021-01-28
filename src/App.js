import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

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
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
