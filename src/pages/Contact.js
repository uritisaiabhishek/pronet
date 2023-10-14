import React from "react";
import Layout from "../components/Layout/Layout";
import Ourlocations from "../assets/images/world_map.svg";
import Contactform from "../components/Contactform";

function Contact() {
	return (
		<Layout>
			<div className='pageContentcard contact_card'>
				<div className='box'></div>
				<h1 className='boxedhome'>here & there</h1>
				<img className='our_locations' src={Ourlocations} alt='our locations' />
				<h4>Contact our Office</h4>
				<div className='details collapse_item contact__Form'>
					<Contactform />
				</div>
			</div>
		</Layout>
	);
}

export default Contact;
