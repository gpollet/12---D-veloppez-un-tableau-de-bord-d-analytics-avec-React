import { createBrowserRouter } from "react-router-dom";
import { getAllUserData } from "./api/api.js";
import App from "./App.js";
import Home from "./pages/Home.js";

const router = createBrowserRouter([
	{
		path: "/*",
		element: <App />,
		children: [
			{
				path: "*",
				element: <Home />,
				/**
				 *
				 * Request all data for selected user
				 * @return {
				 * { number } userId
				 * { Object } mainData
				 * { Object } performance
				 * { Object } sessions
				 * { Object } activity
				 * }
				 */
				loader: () => {
					return getAllUserData(import.meta.env.VITE_USER_ID);
				},
			},
		],
		errorElement: <App />,
	},
]);

export default router;
