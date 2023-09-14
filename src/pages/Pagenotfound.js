import React from "react";
import Layout from "../components/Layout/Layout";
import dino from "../assets/images/dino.svg";

function Pagenotfound() {
	return (
		<Layout>
			<div className='pageContentcard pagenotfound'>
				<div className='box'></div>
				<h1>404</h1>
				<img src={dino} alt='404' />
				<h4>
					You didn't break the internet, but we can't find what you are looking
					for.
				</h4>
			</div>
		</Layout>
	);
}

export default Pagenotfound;
