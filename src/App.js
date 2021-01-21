import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
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
