import { useState } from "react";
import { dataset } from "../api/data.js";
import LeftNav from "../Components/LeftNav.js";
import { User } from "../Models/User.js";

const Home = () => {
	const [userId, setUserId] = useState(12);
	let thatUser: number;
	const thatUserData = dataset[0].filter(data => data.id === userId);
	console.log(thatUserData);
	const user = new User(userId);
	return (
		<>
			<LeftNav />
		</>
	);
};

export default Home;
