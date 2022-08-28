import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

// import { GoCode, GoDeviceCamera } from "react-icons/go";
import { FaRegSmileBeam } from "react-icons/fa";

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
					<li
						className="app__flex p-text"
						key={`link-`}
					>
						<div />
						<a
							href="https://github.com/faisal244"
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
							{[
								"home",
								"about",
								"work",
								"skills",
								"contact",
								// "download CV",
							].map((item) => (
								<li key={item}>
									<a
										href={`#${item}`}
										onClick={() => setToggle(false)}
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
			{/* <div className="cv-btn">
				<a
					href="https://github.com/faisal244"
					target="blank"
				>
					<button>Download CV2</button>
				</a>
			</div> */}

			{/* <Stack
				direction="row"
				spacing={2}
			> */}
			{/* <Button
					variant="outlined"
					startIcon={<DeleteIcon />}
				>
					Delete
				</Button> */}
			{/* <a
					href="https://github.com/faisal244"
					target="blank"
				>
					{" "}
					<Button
						variant="contained"
						endIcon={<SendIcon />}
					>
						Download CV
					</Button>
				</a>
			</Stack> */}
		</nav>
	);
};

export default Navbar;
