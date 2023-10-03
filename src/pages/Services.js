import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Contactform from "../components/Contactform";

function Services() {
	// for accordian working
	const [activeIndex, setActiveIndex] = useState(null);
	// for services form success message
	const [serviceFormSuccess, setserviceformsuccess] = useState(false);
	// for other services form success message
	const [otherserviceFormSuccess, setotherserviceformsuccess] = useState(false);
	// Form Step
	const [formStep, setFormstep] = useState(1);

	// Function to update the otherserviceFormSuccess state
	const updateFormSuccess = (value) => {
		setotherserviceformsuccess(value);
	};
	const onTitleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
		console.log(index + "open accordian");
	};

	const formStephandler = (e, back) => {
		e.preventDefault();
		setFormstep(formStep + 1);
	};

	const backformStephandler = (e) => {
		e.preventDefault();
		setFormstep(formStep - 1);
	};

	const handleService = (e) => {
		e.preventDefault();
		setserviceformsuccess(true);
	};

	return (
		<Layout>
			<div className='pageContentcard'>
				<div className='box'></div>
				<h1 className='pageContentcard__heading'>here to help</h1>
				<div className='details'>
					<div className='accordian'>
						<div
							className={`accodian_title pointer  ${
								activeIndex === 1 ? "active" : ""
							}`}
							onClick={() => onTitleClick(1)}
						>
							I'm interested in PRONET services
						</div>
						<div
							className={`accodian_content ${
								activeIndex === 1 ? "active" : ""
							} ${serviceFormSuccess ? "" : "notsuccess"}`}
						>
							{!serviceFormSuccess ? (
								<form>
									<div
										className={`tabs_header ${formStep === 4 ? "hide" : ""}`}
									>
										<div className='tab_title'>
											Product And Content Services
										</div>
										<div className='tab_title'>Brand Design</div>
										<div className='tab_title'>Bussiness Design</div>
									</div>
									<div className='tabs_content'>
										<div
											className={`${
												formStep === 1 ? "tabs_step show" : "hide"
											}`}
										>
											<div className='tab__leftcontent'>
												We help create or integrate your app to keep your
												business on the competitive edge.
											</div>
											<div className='tab__rightcontent'>
												<div className='flex'>
													<input type='checkbox' />
													<label>Content Design</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Strategy, Research & Testing</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Customer Experience Design</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Business App Development</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Product Design</label>
												</div>
											</div>
											<button onClick={formStephandler}>Next</button>
										</div>
										<div
											className={`${
												formStep === 2 ? "tabs_step show" : "hide"
											}`}
										>
											<div className='tab__leftcontent'>
												Through Band Design, We help create corporate identities
												market presence.
											</div>
											<div className='tab__rightcontent'>
												<div className='flex'>
													<input type='checkbox' />
													<label>Brand Identity Design</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Strategy, Research & Testing</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Brand Strategy</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Design System Development</label>
												</div>
											</div>
											<button onClick={formStephandler}>Next</button>
										</div>
										<div
											className={`${
												formStep === 3 ? "tabs_step show" : "hide"
											}`}
										>
											<div className='tab__leftcontent'>
												Helping future proof your businesses and insure you stay
												fit for purpose.
											</div>
											<div className='tab__rightcontent'>
												<div className='flex'>
													<input type='checkbox' />
													<label>Business Advisory Services</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>North Star Strategy</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Business Strategy</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Process Optimization</label>
												</div>
												<div className='flex'>
													<input type='checkbox' />
													<label>Business Analysis</label>
												</div>
											</div>
											<button onClick={formStephandler}>Next</button>
										</div>
										<div
											className={`${
												formStep === 4 ? "tabs_step show" : "hide"
											}`}
										>
											<Link to='/' className='logo'>
												<img src={Logo} alt='Pronet' height='20' width='20' />
											</Link>
											<div className='tab__form'>
												<div className='flex'>
													<label>Title</label>
													<input type='text' placeholder='your message Title' />
													<span className='error_message'>
														Title is mandatory
													</span>
												</div>
												<div className='flex'>
													<label>Name</label>
													<input type='text' placeholder='your name' />
													<span className='error_message'>
														Title is mandatory
													</span>
												</div>
												<div className='flex'>
													<label>Email</label>
													<input type='text' placeholder='your email address' />
													<span className='error_message'>
														Title is mandatory
													</span>
												</div>
												<div className='flex'>
													<label>Phone number</label>
													<input type='text' placeholder='your phone number' />
													<span className='error_message'>
														Title is mandatory
													</span>
												</div>
												<textarea placeholder='your message'></textarea>
												<div className='form_service_tags'>
													<ul className='services_list'>
														<h4>Services</h4>
														<li>Service 1</li>
														<li>Service 2</li>
														<li>Service 3</li>
														<li>Service 4</li>
														<li>Service 4</li>
														<li>Service 4</li>
														<li>Service 4</li>
														<li>Service 4</li>
														<li>Service 4</li>
													</ul>
													<div className='form_service_tags_count'>+2</div>
												</div>
											</div>
											<div className='button_container_tabs_form'>
												<button onClick={backformStephandler}>Back</button>
												<button onClick={handleService}>Send</button>
											</div>
										</div>
									</div>
								</form>
							) : (
								<>
									{/* Form submit Success Message */}
									<div className='success_message'>
										<strong>Great Job!</strong> Request has been sent.
										<svg
											width='16'
											height='16'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M12.045 6.01476L7.32 11.0148C7.179 11.1648 6.982 11.2498 6.775 11.2498C6.569 11.2498 6.372 11.1648 6.231 11.0158L3.955 8.60876C3.671 8.30676 3.684 7.83176 3.984 7.54776C4.286 7.26376 4.761 7.27876 5.045 7.57676L6.775 9.40876L10.955 4.98576C11.239 4.68476 11.714 4.67076 12.015 4.95476C12.316 5.23976 12.33 5.71376 12.045 6.01476ZM8 -0.000244141C3.589 -0.000244141 0 3.58876 0 7.99976C0 12.4108 3.589 15.9998 8 15.9998C12.411 15.9998 16 12.4108 16 7.99976C16 3.58876 12.411 -0.000244141 8 -0.000244141Z'
												fill='#24853C'
											/>
										</svg>
										<p>
											One of our team members will reach out to address your
											request.
										</p>
									</div>
								</>
							)}
						</div>
					</div>
					<div className='accordian'>
						<div
							className={`accodian_title pointer  ${
								activeIndex === 2 ? "active" : ""
							}`}
							onClick={() => onTitleClick(2)}
						>
							I want to send a message
						</div>
						<div
							className={`accodian_content ${
								activeIndex === 2 ? "active" : ""
							}`}
						>
							content
						</div>
					</div>
					<div className='accordian'>
						<div
							className={`accodian_title pointer  ${
								activeIndex === 3 ? "active" : ""
							}`}
							onClick={() => onTitleClick(3)}
						>
							I want to work at PRONET
						</div>
						<div
							className={`accodian_content ${
								activeIndex === 3 ? "active" : ""
							}`}
						>
							content
						</div>
					</div>
					<div className='accordian'>
						<div
							className={`accodian_title pointer   ${
								activeIndex === 4 ? "active" : ""
							}`}
							onClick={() => onTitleClick(4)}
						>
							I'm interested in other services
						</div>
						<div
							className={`accodian_content ${
								activeIndex === 4 ? "active" : ""
							} ${otherserviceFormSuccess ? "" : "notsuccess"}`}
						>
							<Contactform setFormSuccess={updateFormSuccess} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Services;
