import { getUserGeneralData, getUserSpecificData } from "../api/api.js";
import ActivityGraph from "../components/ActivityGraph.js";
import KeyData from "../components/KeyData.js";
import SessionsAvg from "../components/SessionsAvg.js";
import SessionsKind from "../components/SessionsKind.js";
import UserScore from "../components/UserScore.js";
import { User } from "../models/User.js";

const userId = 12;
const mainData = await getUserGeneralData(userId);
const performance = await getUserSpecificData(userId, "performance");
const sessions = await getUserSpecificData(userId, "average-sessions");
const activity = await getUserSpecificData(userId, "activity");

const Home = () => {
	const userData = {
		mainData: mainData,
		performance: performance,
		sessions: sessions,
		activity: activity,
	};
	const user = new User(userId, userData);
	const createKeyData = Object.entries(user.getKeyData()).map(([key, value]) => {
		let nutrientType = key.replace("Count", "");
		return (
			<KeyData
				key={key}
				nutrientType={nutrientType}
				nutrientValue={value}
			/>
		);
	});
	return (
		<>
			{/* If no user is found with said ID, does not display the dashboard */}
			{user.checkIfUserExist() ? (
				<>
					<div className="dashboard_top-message">
						<h1>Bonjour {user.getInfos()?.firstName}</h1>
						<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
					</div>
					<div className="dashboard_bottom-container">
						<div className="dashboard_left-panel">
							<ActivityGraph sessions={user.getActivity()} />
							<div className="dashboard_left-panel--bottom">
								<SessionsAvg sessions={user.getSessions()} />
								<SessionsKind sessions={user.getPerformance()} />
								<UserScore score={user.getScore()} />
							</div>
						</div>
						<div className="dashboard_right-panel">{createKeyData}</div>
					</div>
				</>
			) : (
				<h1>Aucun utilisateur trouvé.</h1>
			)}
		</>
	);
};

export default Home;
