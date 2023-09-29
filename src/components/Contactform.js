import React, { useState } from "react";
import { Link } from "react-router-dom";
import Errorimg from "../assets/images/error.svg";
import Logo from "../assets/images/logo.svg";
import close from "../assets/images/nav-cross.svg";
import send from "../assets/images/Send.svg";

function Contactform(props) {
	// for other services form success message
	const [otherserviceFormSuccess, setotherserviceformsuccess] = useState(false);

	// manage input states
	const [title, setTitle] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	// Add validity state variables
	const [titleValid, setTitleValid] = useState(true);
	const [nameValid, setNameValid] = useState(true);
	const [emailValid, setEmailValid] = useState(true);
	const [phoneValid, setPhoneValid] = useState(true);

	const closeEvent = (e) => {
		e.preventDefault();
	};

	const handleOtherService = (e) => {
		e.preventDefault();

		// Check if any of the fields are empty and add error classes
		if (title === "") {
			// Handle the error for the Title field here (you can add a state to manage this)
			setTitleValid(false);
		} else {
			setTitleValid(true);
		}
		if (name === "") {
			// Handle the error for the Name field here (you can add a state to manage this)
			setNameValid(false);
		} else {
			setNameValid(true);
		}
		if (email === "") {
			// Handle the error for the Email field here (you can add a state to manage this)
			setEmailValid(false);
		} else {
			setEmailValid(true);
		}
		if (phone === "") {
			// Handle the error for the Phone field here (you can add a state to manage this)
			setPhoneValid(false);
		} else {
			setPhoneValid(true);
		}

		// Check if all fields are filled, and if so, proceed with form submission
		if (title !== "" && name !== "" && email !== "" && phone !== "") {
			// Perform the form submission logic here
			alert(
				"title " +
					title +
					" name " +
					name +
					" email " +
					email +
					" message " +
					message
			);
			setotherserviceformsuccess(true); // For the success message
			if (props && props.setFormSuccess) {
				props.setFormSuccess(true); // Set the form success state in the parent component if props exist
			}
		}
	};

	return (
		<>
			{otherserviceFormSuccess ? (
				// Form submit Success Message
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
					<p>One of our team members will reach out to address your request.</p>
				</div>
			) : (
				<form>
					<div className='form__header flex'>
						<Link to='/'>
							<img src={Logo} alt='Pronet' height='20' width='20' />
						</Link>
						<div className='flex alignItemsCenter'>
							<button
								onClick={handleOtherService}
								className='flex alignItemsCenter'
							>
								<img src={send} alt='send ' />
							</button>

							<button className='close' onClick={closeEvent}>
								<img src={close} alt='close ' />
							</button>
						</div>
					</div>
					<div className='tab__form'>
						<div className='flex'>
							<label>Title</label>
							<input
								className={titleValid ? "" : "error"}
								type='text'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder='Enter title'
							/>
							{!titleValid ? (
								<>
									<img src={Errorimg} alt='err' />
									<span className='error_message'>Title is mandatory</span>
								</>
							) : (
								""
							)}
						</div>
						<div className='flex'>
							<label>Name</label>
							<input
								className={!nameValid ? "error" : ""}
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder='Your name'
							/>
							{!nameValid ? (
								<>
									<img src={Errorimg} alt='err' />
									<span className='error_message'>Name is mandatory</span>
								</>
							) : (
								""
							)}
						</div>
						<div className='flex'>
							<label>Email</label>
							<input
								className={!emailValid ? "error" : ""}
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Your email address'
							/>
							{!emailValid ? (
								<>
									<img src={Errorimg} alt='err' />
									<span className='error_message'>Email is mandatory</span>
								</>
							) : (
								""
							)}
						</div>
						<div className='flex'>
							<label>Phone number</label>
							<input
								className={!phoneValid ? "error" : ""}
								type='text'
								value={phone === undefined ? "" : phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder='Your phone number'
							/>
							{!phoneValid ? (
								<>
									<img src={Errorimg} alt='err' />
									<span className='error_message'>
										Phone number is mandatory
									</span>
								</>
							) : (
								""
							)}
						</div>
						<textarea
							placeholder='Your message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>
				</form>
			)}
		</>
	);
}

export default Contactform;
