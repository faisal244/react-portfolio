import React from "react";
import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<FaGithubSquare />
		</div>
		<div>
			<GrMail />
		</div>
		<div>
			<BsLinkedin />
		</div>
	</div>
);

export default SocialMedia;
