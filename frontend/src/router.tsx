import { createBrowserRouter } from "react-router-dom";
import App from "./App.js";
import Home from "./Pages/Home.js";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/*",
				element: <Home />,
			},
		],
	},
]);

export default router;
