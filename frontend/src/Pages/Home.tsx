import { useState } from "react";
import LeftNav from "../Components/LeftNav.js";
import { User } from "../Models/User.js";

const Home = () => {
	const [userId, setUserId] = useState(12);
	const user = new User(userId);
	return (
		<>
			<LeftNav />
			{/* If no user is found with said ID, does not display the dashboard */}
			{user.checkIfUserExist() ?
			(
				<div className="dashboard_top-message">
					<h1>Bonjour {user.getInfos()?.firstName}</h1>
					<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
				</div>
			) 
			:
			(
				<h1>Aucun utilisateur trouvé.</h1>
			)}
		</>
	);
};

export default Home;
