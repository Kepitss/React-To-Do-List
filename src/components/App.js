import React from "react";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";

const App = () => {
	return (
		<Container fluid="xs">
			<h1 className="custom-heading text-center">To Do List</h1>
		</Container>
	);
};

export default App;
