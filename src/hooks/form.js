import React, { useState, useContext } from 'react';
import { ListContext } from '../context/ListContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function TodoForm(props) {
  const listContext = useContext(ListContext);

  const [state, setState] = useState({ item: {} });
  function handleInputChange(e) {
    setState({ item: { ...state.item, [e.target.name]: e.target.value } });
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    listContext.add(state.item)
    const item = {};
    setState({ item });
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Text className="text-muted">
            <h2>Add To Do Item</h2>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control placeholder="Item Details" onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </>
  );
}


export default TodoForm;
