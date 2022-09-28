import React from "react";

import {
	About,
	// About2,
	Footer,
	Header,
	Skills,
	Testimonial,
	Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";
// import About2 from "./container/About2/About2";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			{/* <About2 /> */}
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
};

export default App;
