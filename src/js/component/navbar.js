import React from "react";
import { Link } from "react-router-dom";
// import logo from "/workspace/react-hello-webapp/src/js/component/start-wars.jpg"
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://static3.srcdn.com/wordpress/wp-content/uploads/Star-Wars-Episode-7-Fan-Logo.jpg" width={"300px"}></img></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
