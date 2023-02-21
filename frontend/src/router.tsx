import { createBrowserRouter } from "react-router-dom";
import { getAllUserData } from "./api/api.js";
import {
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_MAIN_DATA,
	USER_PERFORMANCE,
} from "./api/data.js";
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
				// Request all data for selected user, either by querying the API or by using the mock dataset, depending on the environment variable value.
				loader: () => {
					if (import.meta.env.VITE_USE_MOCK_DATA === "false") {
						console.log("Data received from : API");
						return getAllUserData(import.meta.env.VITE_USER_ID);
					} else if (import.meta.env.VITE_USE_MOCK_DATA === "true") {
						console.log("Data received from : Mock");
						const userId = Number(import.meta.env.VITE_USER_ID);
						return {
							userId: userId,
							mainData: USER_MAIN_DATA.find(el => el.id === userId),
							performance: USER_PERFORMANCE.find(el => el.userId === userId),
							sessions: USER_AVERAGE_SESSIONS.find(el => el.userId === userId),
							activity: USER_ACTIVITY.find(el => el.userId === userId),
						};
					}
				},
			},
		],
		errorElement: <App />,
	},
]);

export default router;
