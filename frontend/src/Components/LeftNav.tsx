import { NavLink } from "react-router-dom";

const LeftNav = () => {
	return (
		<nav className="left-nav">
			<div className="left-nav_icons">

			<NavLink to="/yoga">
				<img src="src/assets/icon-yoga.png" />
			</NavLink>
			<NavLink to="/swimming">
				<img src="src/assets/icon-swimming.png" />
			</NavLink>
			<NavLink to="/cycling">
				<img src="src/assets/icon-cycling.png" />
			</NavLink>
			<NavLink to="/lifting">
				<img src="src/assets/icon-lifting.png" />
			</NavLink>
			</div>

			<p>Copyright SportSee 2020</p>
		</nav>
	);
};

export default LeftNav;
