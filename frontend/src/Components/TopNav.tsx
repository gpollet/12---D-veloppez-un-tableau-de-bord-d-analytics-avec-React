import { NavLink } from "react-router-dom";

const TopNav = () => {
	return (
		<>
			<img
				src="src/assets/logo-sportsee.png"
				alt="Logo SportSee"
			/>
			<nav className="top-nav">
					<NavLink to="/home">Accueil</NavLink>
					<NavLink to="/profile">Profil</NavLink>
					<NavLink to="/settings">Réglage</NavLink>
					<NavLink to="/community">Communauté</NavLink>
			</nav>
		</>
	);
};

export default TopNav;
