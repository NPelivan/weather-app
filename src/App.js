import Homepage from "./pages/homepage";
import SearchBar from "./components/searchBar";
import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";

function App() {
	const routes = useRoutes([
		{ path: "/", element: <Homepage /> },
		{ path: "/city", element: <SearchBar /> },
	]);

	return routes;
}

export default App;
