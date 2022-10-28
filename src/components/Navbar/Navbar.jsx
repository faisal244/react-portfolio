import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";

// import { GoCode, GoDeviceCamera } from "react-icons/go";
// import { FaRegSmileBeam } from "react-icons/fa";

import "./Navbar.scss";
const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				{/* <h6>SOURCE NEW LOGO AND INSERT HERE</h6> */}
				<img
					src={images.logo6}
					alt="logo"
				/>
				{/* <img src={FaRegSmileBeam} alt="logo" /> */}
			</div>

			<ul className="app__navbar-links">
				{["home", "about", "work", "skills", "contact"].map((item) => (
					<li
						className="app__flex p-text"
						key={`link-${item}`}
					>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
				{
					// download CV link
					<li
						className="app__flex p-text"
						key={`link-download-cv`}
					>
						<div />
						<a
							href="https://docs.google.com/document/d/1hsaTT6Wy2Twc09yIJk_iT6BpxK4VqLL-/edit?usp=sharing&ouid=116861946458425075008&rtpof=true&sd=true"
							target="blank"
							className="app__flex p-text cv-link "
						>
							Download CV
						</a>
					</li>
				}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{["home", "about", "work", "skills", "contact"].map((item) => (
								<li key={item}>
									<a
										href={`#${item}`}
										onClick={() => setToggle(false)}
									>
										{item}
									</a>
								</li>
							))}
							{
								<li key={`link-download-cv`}>
									<a
										href="https://docs.google.com/document/d/1hsaTT6Wy2Twc09yIJk_iT6BpxK4VqLL-/edit?usp=sharing&ouid=116861946458425075008&rtpof=true&sd=true"
										target="blank"
										onClick={() => setToggle(false)}
									>
										Download CV
									</a>
								</li>
							}
							{
								<li key={`link-download-cv`}>
									<a
										href="https://github.com/faisal244"
										target="blank"
										onClick={() => setToggle(false)}
									>
										Check out my GitHub
									</a>
								</li>
							}
							{
								<li key={`link-download-cv`}>
									<a
										href="https://www.linkedin.com/in/faisal244/"
										target="blank"
										onClick={() => setToggle(false)}
									>
										Connect with me on LinkedIn
									</a>
								</li>
							}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
