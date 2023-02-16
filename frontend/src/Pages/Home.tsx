import { useState } from "react";
import ActivityGraph from "../components/ActivityGraph.js";
import KeyData from "../components/KeyData.js";
import SessionsAvg from "../components/SessionsAvg.js";
import SessionsKind from "../components/SessionsKind.js";
import UserScore from "../components/UserScore.js";
import { User } from "../models/User.js";

const Home = () => {
	const [userId, setUserId] = useState(18);
	const user = new User(userId);
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
								<SessionsKind sessions={user.getPerformance()} performanceKind={user.getPerformanceKind()} />
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
