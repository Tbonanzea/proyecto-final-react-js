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
				<ItemDetailContainer />
				<ItemListContainer />
				<Switch>
					<Route exact path=""></Route>
					<Route path=""></Route>
					<Route path=""></Route>
					<Route path=""></Route>
					<Route path=""></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
