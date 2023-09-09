import React from "react";
import Layout from "../components/Layout/Layout";
import Ourlocations from "../assets/images/world_map.svg";
function Contact() {
	return (
		<Layout>
			<div className='pageContentcard'>
				<h1>here & there</h1>
				<img className='our_locations' src={Ourlocations} alt='our locations' />
				<div className='details collapse_item'>
					<h4>Contact our Office</h4>
					<div className='collapse_item_content'>some contnet</div>
				</div>
			</div>
		</Layout>
	);
}

export default Contact;
