import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<Link to='/' className='logo'>
				Logo
			</Link>
			<ul>
				<li>
					<NavLink to='/services' activeclassName='active'>
						Services
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeclassName='active'>
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink to='/projects' activeclassName='active'>
						Projects
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
