import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

function Homepage() {
	const [count, setCount] = useState();
	const [dotss, setDotss] = useState([]);
	let pageContentcards = document.querySelectorAll(".pageContentcard__content");

	var pageContentcardCount = pageContentcards.length;
	console.log(pageContentcardCount);

	useEffect(() => {
		let pageMainContainer = document.querySelector("main");

		pageMainContainer.addEventListener("scroll", () => {
			pageContentcards.forEach((element, index) => {
				// Get the element's position from the top of the viewport
				let rect = element.getBoundingClientRect();
				let positionFromTop = rect.top;

				if (positionFromTop >= 0 && positionFromTop <= window.innerHeight) {
					setCount((index + 1).toString().padStart(2, "0"));
					// You can use setCount(null) to reset count when elements are not in view
				}
			});
		});

		let dots = Array.from({ length: 3 }, (_, index) => (
			<div
				key={index}
				className={`dot ${count - 1 === index ? "active" : ""}`}
			></div>
		));

		setDotss(dots);
		// Clean up the event listener when the component unmounts
		return () => {
			pageMainContainer.removeEventListener("scroll", () => {
				console.log("trigger scroll event");
			});
		};
	}, []); // Empty dependency array to run the effect once on mount

	// Create an array of div elements with class "dot" based on the pageContentcardCount

	return (
		<Layout>
			<div className='homepage'>
				<div className='count'>{count ? count : "01"}</div>
				<div className='pagination'>{dotss}</div>
				<div className='pageContentcard'>
					<div className='box'></div>
					<div className='pageContentcard__content'>
						<h1 className='boxedhome'>We are Pronet</h1>
						<p>A Design Studio, SaSS and Mobile Developers</p>
					</div>
					<div className='pageContentcard__content'>
						<h1 className='boxedhome'>Our Promise</h1>
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
						<h1 className='boxedhome'>Our Team</h1>
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
