import React from "react";
import Layout from "../components/Layout/Layout";

function Homepage() {
	return (
		<Layout>
			<div className='homepage'>
				<div className='pageContentcard'>
					<div className='box'></div>
					<div className='pageContentcard__content'>
						<h1>We are Pronet</h1>
						<p>A Design Studio, SaSS and Mobile Developers</p>
					</div>
					<div className='pageContentcard__content'>
						<h1>Our Promise</h1>
						<div className='content'>
							<p>
								At ProNet, we are dedicated to providing exceptional IT
								solutions, web development services, and SaaS application
								creation. As a small, motivated team, we pride ourselves on our
								commitment to empowering one another and exceeding customer
								expectations.
							</p>
							<h4>Customer Satisfaction</h4>
							<p>
								Your satisfaction is at the core of everything we do. We aim to
								build strong, long-lasting relationships with our clients by
								delivering premium services and outstanding support. We take the
								time to understand your unique requirements, ensuring that our
								solutions effectively address your IT challenges and drive your
								business forward.
							</p>
							<h4>Transparency and Integrity</h4>
							<p>
								We believe in transparent and open communication throughout our
								partnership. From project initiation to delivery and beyond, we
								keep you informed every step of the way. We prioritize honesty,
								integrity, and ethical practices in all aspects of our work,
								ensuring that your trust is well-founded.
							</p>
							<h4>Partner with ProNet</h4>
							<p>
								Experience the ProNet difference. We are dedicated to delivering
								top-notch IT solutions, web development services, and SaaS
								application creation for businesses of all sizes. Let us be your
								trusted partner in transforming your digital landscape,
								optimizing your processes, and achieving your goals. Contact us
								today to start your journey to success.
							</p>
						</div>
					</div>
					<div className='pageContentcard__content'>
						<h1>Our Team</h1>
						<p className='content'>
							We believe that true success lies in collaboration and shared
							goals. Our passionate team members fuel each other's drive to
							deliver outstanding results for our clients. We constantly
							challenge ourselves to stay at the forefront of technology trends
							and industry advancements, enabling us to provide innovative
							solutions tailored to your specific needs.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Homepage;
