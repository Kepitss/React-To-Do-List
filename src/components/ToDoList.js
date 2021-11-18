import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import ToDoItem from './ToDoItem';

const ToDoList = ({ toDos, setToDos, todoEditing, setTodoEditing, editingText, setEditingText }) => {
    return (
        <ListGroup>
            {toDos.map( toDoItem => (
                <ToDoItem
                    key={toDoItem.id}
                    text={toDoItem.text}
                    toDos={toDos}
                    setToDos={setToDos}
                    toDoItem={toDoItem}

                    todoEditing = {todoEditing}
                    setTodoEditing = {setTodoEditing}
                    editingText = {editingText}
                    setEditingText = {setEditingText}
                />
        ))}
        </ListGroup>
    );
}

export default ToDoList;