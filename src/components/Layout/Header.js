import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
	return (
		<header>
			<Link to='/' className='logo'>
				<img src={logo} alt='pronet' />
			</Link>
			<ul>
				<li>
					<NavLink to='/services' activeclassname='active'>
						Services
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeclassname='active'>
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink to='/projects' activeclassname='active'>
						Projects
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
