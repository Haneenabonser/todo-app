import React  from 'react';
import useForm from '../hooks/form';
import { Form,Button } from 'react-bootstrap';
import './todo.scss'


function ToDoForm(props) {
  const { handleChange, handleSubmit } = useForm(props.addItem);


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
          <Form.Control placeholder="Item Details" name="text" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    </>
  );
}


export default ToDoForm;
