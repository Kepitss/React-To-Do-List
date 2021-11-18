import React from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Form from 'react-bootstrap/form';


const ToDoItem = ({ text, toDos, setToDos, toDoItem, todoEditing, setTodoEditing, editingText, setEditingText }) => {
    const onItemDelete = () => {
        setToDos(toDos.filter( item => item.id !== toDoItem.id));
    }

    const onTextComplete = () => {
        setToDos(toDos.map( item => {
            if (item.id === toDoItem.id) {
                return {...toDoItem, done: !item.done}
            }
            return item;
        }));
    }

    function submitEdits(id) {
        setToDos([...toDos].map( item  => {
            if (item.id === id) {
                item.text = editingText;
            }
            return item;
        }));

        setTodoEditing(null);
      }
    
    return (
        
        <ListGroup.Item as="li" className="d-flex align-items-center">
            <Col lg={9} xs={6} className="justify-content-start">
                {toDoItem.id === todoEditing ? (
                    <InputGroup>  
                        <FormControl
                            placeholder="Edit here..."
                            onChange={(e) => setEditingText(e.target.value)}
                            autoFocus
                        />
                    </InputGroup>
                ) :
                (
                    <Form.Check 
                        type="checkbox" 
                        label={text} 
                        className={`${toDoItem.done ? "done" : ""}`}
                        onClick={onTextComplete}
                    />
                )}
            </Col>
                
            <Col lg={3} xs={6}  className="d-flex justify-content-end align-items-center">
                {toDoItem.id === todoEditing ? (
                    <Button 
                        variant="outline-primary" 
                        onClick={() => submitEdits(toDoItem.id)}
                    >Save</Button>
                ) : (
                    <Button 
                        variant="outline-primary" 
                        onClick={() => setTodoEditing(toDoItem.id)}
                    >Edit</Button>
                )}
                    <Button 
                        className="ms-2" 
                        variant="outline-danger" 
                        onClick={onItemDelete}
                    >Delete</Button>
            </Col>  
        </ListGroup.Item>
    );
}

export default ToDoItem;