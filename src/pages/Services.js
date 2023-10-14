import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Contactform from "../components/Contactform";
import send from "../assets/images/Send.svg";
import back from "../assets/images/Back.svg";
import close from "../assets/images/nav-cross.svg";
import Errorimg from "../assets/images/error.svg";
import Next from "../assets/images/Next.svg";

function Services() {
	// for accordian working
	const [activeIndex, setActiveIndex] = useState(null);
	// for services form success message
	const [serviceFormSuccess, setserviceformsuccess] = useState(false);
	// for other services form success message
	const [otherserviceFormSuccess, setotherserviceformsuccess] = useState(false);
	// Form Step
	const [formStep, setFormstep] = useState(1);
	// Initialize state for form input values and error messages
	const [formData, setFormData] = useState({
		title: "",
		name: "",
		email: "",
		phoneNumber: "",
		message: "",
	});
	// Initialize state for checkbox values
	const [checkboxValues, setCheckboxValues] = useState({
		contentDesign: false,
		strategyResearchTesting: false,
		customerExperienceDesign: false,
		businessAppDevelopment: false,
		productDesign: false,
		brandIdentity: false,
		designSystemDevelopment: false,
		businessAdvisoryServices: false,
		northStarStrategy: false,
		businessStrategy: false,
		processOptimization: false,
		businessAnalysis: false,
	});

	// Handle checkbox change
	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;

		// Update the state with the new checkbox value
		setCheckboxValues({
			...checkboxValues,
			[name]: checked,
		});
	};
	// Function to update the otherserviceFormSuccess state
	const updateFormSuccess = (value) => {
		setotherserviceformsuccess(value);
	};

	const onTitleClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
		console.log(index + "open accordian");
	};

	const formStephandler = (e) => {
		e.preventDefault();
		setFormstep(formStep + 1);
		console.log(checkboxValues);
	};

	const backformStephandler = (e) => {
		e.preventDefault();
		setFormstep(formStep - 1);
	};

	const [formErrors, setFormErrors] = useState({
		title: "",
		name: "",
		email: "",
		phoneNumber: "",
	});

	// Handle form input change
	const handleInputChange = (event) => {
		const { name, value } = event.target;

		// Update the form data state with the new input value
		setFormData({
			...formData,
			[name]: value,
		});

		// Clear the error message for the changed field
		setFormErrors({
			...formErrors,
			[name]: "",
		});
	};

	// Filter the checkbox values that are true
	const checkedItems = Object.keys(checkboxValues).filter(
		(key) => checkboxValues[key]
	);

	// Handle services form submission
	const handleService = (e) => {
		e.preventDefault();
		// Validate mandatory fields
		let hasErrors = false;
		const updatedErrors = { ...formErrors };

		if (formData.title.trim() === "") {
			updatedErrors.title = "Title is mandatory";
			hasErrors = true;
		}

		if (formData.name.trim() === "") {
			updatedErrors.name = "Name is mandatory";
			hasErrors = true;
		}

		if (formData.email.trim() === "") {
			updatedErrors.email = "Email is mandatory";
			hasErrors = true;
		}

		if (formData.phoneNumber.trim() === "") {
			updatedErrors.phoneNumber = "Phone number is mandatory";
			hasErrors = true;
		}

		// Update the error messages
		setFormErrors(updatedErrors);

		// If there are errors, do not submit the form
		if (hasErrors) {
			return;
		}
		// Process the form data here (e.g., send it to a server)
		// For demonstration purposes, you can access the form data in formData object
		console.log("Form submitted with data:", formData, checkedItems);
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
											className={`tabs_step ${
												formStep === 1 ? " show" : " hide"
											}`}
										>
											<div className='tab__leftcontent'>
												We help create or integrate your app to keep your
												business on the competitive edge.
											</div>
											<div className='tab__rightcontent'>
												<div className='flex alignItemsCenter'>
													<input
														id='contentDesign'
														type='checkbox'
														name='contentDesign'
														checked={checkboxValues.contentDesign}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='contentDesign'>Content Design</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='strategyResearchTesting'
														checked={checkboxValues.strategyResearchTesting}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='strategyResearchTesting'>
														Strategy, Research & Testing
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='customerExperienceDesign'
														checked={checkboxValues.customerExperienceDesign}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='customerExperienceDesign'>
														Customer Experience Design
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='businessAppDevelopment'
														checked={checkboxValues.businessAppDevelopment}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='businessAppDevelopment'>
														Business App Development
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='productDesign'
														checked={checkboxValues.productDesign}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='productDesign'>Product Design</label>
												</div>
											</div>
											<button className='nextBtn' onClick={formStephandler}>
												<img src={Next} alt='next' />
											</button>
										</div>
										<div
											className={`tabs_step${
												formStep === 2 ? " show" : " hide"
											}`}
										>
											<div className='tab__leftcontent'>
												Through Band Design, We help create corporate identities
												market presence.
											</div>
											<div className='tab__rightcontent'>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='brandIdentity'
														checked={checkboxValues.brandIdentity}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='brandIdentity'>
														Brand Identity Design
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='strateyResearchTesting'
														checked={checkboxValues.strategyResearchTesting}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='strateyResearchTesting'>
														Strategy, Research & Testing
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input type='checkbox' name='brandStrategy' />
													<label htmlFor='brandStrategy'>Brand Strategy</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='designSystemDevelopment'
														checked={checkboxValues.designSystemDevelopment}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='designSystemDevelopment'>
														Design System Development
													</label>
												</div>
											</div>
											<button className='nextBtn' onClick={formStephandler}>
												<img src={Next} alt='next' />
											</button>
										</div>
										<div
											className={`tabs_step${
												formStep === 3 ? " show" : " hide"
											}`}
										>
											<div className='tab__leftcontent'>
												Helping future proof your businesses and insure you stay
												fit for purpose.
											</div>
											<div className='tab__rightcontent'>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='businessAdvisoryServices'
														checked={checkboxValues.businessAdvisoryServices}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='businessAdvisoryServices'>
														Business Advisory Services
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='northStarStrategy'
														checked={checkboxValues.northStarStrategy}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='northStarStrategy'>
														North Star Strategy
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='businessStrategy'
														checked={checkboxValues.businessStrategy}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='businessStrategy'>
														Business Strategy
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='processOptimization'
														checked={checkboxValues.processOptimization}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='processOptimization'>
														Process Optimization
													</label>
												</div>
												<div className='flex alignItemsCenter'>
													<input
														type='checkbox'
														name='businessAnalysis'
														checked={checkboxValues.businessAnalysis}
														onChange={handleCheckboxChange}
													/>
													<label htmlFor='businessAnalysis'>
														Business Analysis
													</label>
												</div>
											</div>
											<button className='nextBtn' onClick={formStephandler}>
												<img src={Next} alt='next' />
												<p>
													<strong>Next: </strong>Tell us a little about yourself
												</p>
											</button>
										</div>
										<div
											className={`tabs_step${
												formStep === 4 ? " show" : " hide"
											}`}
										>
											<Link to='/' className='logo'>
												<img src={Logo} alt='Pronet' height='20' width='20' />
											</Link>
											<div className='tab__form'>
												<div className='flex'>
													<label>Title</label>
													<input
														type='text'
														placeholder='your message Title'
														name='title'
														value={formData.title}
														onChange={handleInputChange}
													/>
													{formErrors.title && (
														<>
															<img src={Errorimg} alt='err' />
															<span className='error_message'>
																{formErrors.title}
															</span>
														</>
													)}
												</div>
												<div className='flex'>
													<label>Name</label>
													<input
														type='text'
														placeholder='your name'
														name='name'
														value={formData.name}
														onChange={handleInputChange}
													/>
													{formErrors.name && (
														<>
															<img src={Errorimg} alt='err' />
															<span className='error_message'>
																{formErrors.name}
															</span>
														</>
													)}
												</div>
												<div className='flex'>
													<label>Email</label>
													<input
														type='text'
														placeholder='your email address'
														name='email'
														value={formData.email}
														onChange={handleInputChange}
													/>
													{formErrors.email && (
														<>
															<img src={Errorimg} alt='err' />
															<span className='error_message'>
																{formErrors.email}
															</span>
														</>
													)}
												</div>
												<div className='flex'>
													<label>Phone number</label>
													<input
														type='text'
														placeholder='your phone number'
														name='phoneNumber'
														value={formData.phoneNumber}
														onChange={handleInputChange}
													/>

													{formErrors.phoneNumber && (
														<>
															<img src={Errorimg} alt='err' />
															<span className='error_message'>
																{formErrors.phoneNumber}
															</span>
														</>
													)}
												</div>
												<textarea
													placeholder='your message'
													name='message'
													value={formData.message}
													onChange={handleInputChange}
												></textarea>
												{checkedItems.length > 0 && (
													<div className='form_service_tags'>
														<ul className='services_list'>
															<h4>Services</h4>
															{checkedItems.slice(0, 4).map((value) => (
																<li key={value}>{value}</li>
															))}
														</ul>
														{checkedItems.length > 4 && (
															<div className='form_service_tags_count'>
																+{checkedItems.length - 4}
															</div>
														)}
													</div>
												)}
											</div>
											<div className='button_container_tabs_form'>
												<button
													onClick={backformStephandler}
													className='flex alignItemsCenter'
												>
													<img src={back} alt='back' />
												</button>
												<button
													onClick={handleService}
													className='flex alignItemsCenter'
												>
													<img src={send} alt='send ' />
												</button>
												<div
													onClick={() => onTitleClick(1)}
													className='flex alignItemsCenter'
												>
													<img src={close} alt='close ' />
												</div>
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
							} ${otherserviceFormSuccess ? "" : "notsuccess"}`}
						>
							<Contactform setFormSuccess={updateFormSuccess} />
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
							} ${otherserviceFormSuccess ? "" : "notsuccess"}`}
						>
							<Contactform setFormSuccess={updateFormSuccess} />
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
