import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";

import FormInput from "./FormInput";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [toDos, setToDos] = useState([]);

	return (
		<Container fluid="xs">
			<h1 className="custom-heading text-center">To Do List</h1>

			<Row className="justify-content-center">
				<Col xs={11} lg={6}>
					<FormInput
						inputText={inputText}
						setInputText={setInputText}
						toDos={toDos}
						setToDos={setToDos}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
