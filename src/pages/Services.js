import React from "react";
import Layout from "../components/Layout/Layout";
import Accordion from "../components/Accordian/Accordian";

function Services() {
	const accordionItems = [
		{
			title: "I'm interested in PRONET services",
			content: "<div>test</div>",
		},
		{
			title: "I want to send a message",
			content: "This is the content of section 3.",
		},
		{
			title: "I want to work at PRONET",
			content: "This is the content of section 3.",
		},
		{
			title: "I'm interested in other services",
			content: "This is the content of section 3.",
		},
	];
	return (
		<Layout>
			<div className='pageContentcard'>
				<div className='box'></div>
				<h1>here to help</h1>
				<div className='details'>
					<Accordion items={accordionItems} />
				</div>
			</div>
		</Layout>
	);
}

export default Services;
