import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

function Projects() {
	return (
		<Layout>
			<div className='pageContentcard'>
				<div className='box'></div>
				<h1>Our Works</h1>
				<div className='project_grid'>
					<div className='project_grid__Card'>
						<img
							src='https://via.placeholder.com/400?text=No Image'
							className='project_grid__Card__image'
							alt='project name '
						/>
						<Link to='/' className='project_grid__Card__content'>
							<h4>Test</h4>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Projects;
