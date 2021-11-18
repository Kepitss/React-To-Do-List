import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";

import FormInput from "./FormInput";
import ToDoList from "./ToDoList";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [toDos, setToDos] = useState([]);
	const [todoEditing, setTodoEditing] = useState(null);
	const [editingText, setEditingText] = useState("");

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

			<Row className="justify-content-center">
				<Col xs={12} lg={8}>
					<ToDoList
						toDos={toDos}
						setToDos={setToDos}
						todoEditing={todoEditing}
						setTodoEditing={setTodoEditing}
						editingText={editingText}
						setEditingText={setEditingText}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
