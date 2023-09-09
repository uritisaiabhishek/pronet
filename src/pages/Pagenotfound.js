import React from "react";
import Layout from "../components/Layout/Layout";
import dino from "../assets/images/dino.svg";

function Pagenotfound() {
	return (
		<Layout>
			<div className='pageContentcard '>
				<h1>We are Pronet</h1>
				<img src={dino} alt='404' />
			</div>
		</Layout>
	);
}

export default Pagenotfound;
