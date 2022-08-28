import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
// import { FcDocument } from "react-icons/fc";

import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (event) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<h2 className="head-text">
				Like what you've read? Get in touch & chat with me
			</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img
						src={images.email}
						alt="email"
					/>
					<a
						href="mailto:m.faisal244@gmail.com"
						className="p-text"
					>
						m.faisal244@gmail.com
					</a>
				</div>

				<div className="app__footer-card">
					<img
						src={images.mobile}
						alt="mobile"
					/>
					<a
						href="tel: +44 07702021386"
						className="p-text"
					>
						07702021386
					</a>
				</div>
				<div className="app__footer-card">
					<img
						src={images.cvicon}
						alt="download-cv"
					/>
					<a
						href="tel: +44 07702021386"
						className="p-text"
					>
						Download CV
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							className="p-text"
							type="text"
							placeholder="Your Name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="email"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</div>
					<button
						type="button"
						className="p-text"
						onClick={handleSubmit}
					>
						{!loading ? "Send Message" : "Sending..."}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
