import { useState } from "react";
import LeftNav from "../Components/LeftNav.js";
import { User } from "../Models/User.js";

const Home = () => {
	const [userId, setUserId] = useState(12);
	const user = new User(userId);
	return (
		<>
			<LeftNav />
			<div className="dashboard_top-message">
				<h1>Bonjour {user.getFirstName()}</h1>
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
		</>
	);
};

export default Home;
