import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer } from "recharts";
import ActivityGraph from "../components/ActivityGraph.js";
import KeyData from "../components/KeyData.js";
import SessionsAvg from "../components/SessionsAvg.js";
import SessionsKind from "../components/SessionsKind.js";
import UserScore from "../components/UserScore.js";
import { User } from "../models/User.js";
import { UserType } from "../types.js";

const Home = () => {
	const userData = useLoaderData() as UserType;
	const user = new User(userData);
	const createKeyData = () =>
		Object.entries(user.getKeyData()).map(([key, value]) => {
			// Retrieves the name of all the nutrients from the data, and removes "count" from it to get a list of them
			const nutrientType = key.replace("Count", "");
			return (
				<KeyData
					key={key}
					nutrientType={nutrientType}
					nutrientValue={value}
				/>
			);
		});
	
	// Responsive container used to display the three charts at the bottom, thus allowing us to easily resize all of them at once
	const createBottomChartContainer = (chart: JSX.Element) => {
		return (
			<ResponsiveContainer
				width="30%"
				aspect={1}
			>
				{chart}
			</ResponsiveContainer>
		);
	};
	return (
		<>
			{/* If no user is found with said ID, does not display the dashboard */}
			{user.checkIfUserExist() ? (
				<>
					<div className="dashboard_container">
						<div className="dashboard_top-message">
							<h1>
								Bonjour <span className="home_user-name">{user.getInfos()?.firstName}</span>
							</h1>
							<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
						</div>
						<div className="dashboard_charts-container">
							<div className="dashboard_left-panel">
								<ActivityGraph sessions={user.getActivity()} />
								<div className="dashboard_left-panel--bottom">
									{createBottomChartContainer(<SessionsAvg sessions={user.getSessions()} />)}
									{createBottomChartContainer(<SessionsKind sessions={user.getPerformance()} />)}
									{createBottomChartContainer(<UserScore score={user.getScore()} />)}
								</div>
							</div>
							<div className="dashboard_right-panel">{createKeyData()}</div>
						</div>
					</div>
				</>
			) : (
				<h1>Aucun utilisateur trouvé.</h1>
			)}
		</>
	);
};

export default Home;
