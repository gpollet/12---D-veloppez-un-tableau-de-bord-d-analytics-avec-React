import { NavLink } from "react-router-dom";

const TopNav = () => {
	return (
		<nav className="top-nav">
			<img
				src="src/assets/logo-sportsee.png"
				alt="Logo SportSee"
			/>
			<ul>
				<NavLink to="/home">Accueil</NavLink>
				<NavLink to="/profile">Profil</NavLink>
				<NavLink to="/settings">Réglage</NavLink>
				<NavLink to="/community">Communauté</NavLink>
			</ul>
		</nav>
	);
};

export default TopNav;
