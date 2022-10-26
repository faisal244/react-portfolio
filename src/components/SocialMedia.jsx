import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a
				href="https://github.com/faisal244"
				target="blank"
			>
				<FaGithubSquare />
			</a>
		</div>
		<div>
			<a href="mailto:m.faisal244@gmail.com">
				<GrMail />
			</a>
		</div>
		<div>
			<a
				href="https://linkedin.com/in/faisal244"
				target="blank"
			>
				<BsLinkedin />
			</a>
		</div>
	</div>
);

export default SocialMedia;
