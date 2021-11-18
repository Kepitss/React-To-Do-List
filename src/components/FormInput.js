import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const FormInput = ({ inputText, setInputText, toDos, setToDos }) => {
	const onInputChange = (e) => {
		setInputText(e.target.value);
	};

	const onButtonClick = (e) => {
		e.preventDefault();

		// Preventing from blank list element creation
		if (!inputText || /^\s*$/.test(inputText)) {
			return;
		}

		setToDos([...toDos, { text: inputText, done: false, id: Math.random() * 10000 }]);
		setInputText("");
	};

	return (
		<Form>
			<InputGroup className="mb-4">
				<FormControl
					placeholder="Write here..."
					value={inputText}
					onChange={onInputChange}
					className="py-2 custom-add-input"
					autoFocus
				/>
				<Button
					onClick={onButtonClick}
					type="submit"
					variant="outline-secondary"
					className="custom-add-btn"
				>
					Add
				</Button>
			</InputGroup>
		</Form>
	);
};

export default FormInput;
