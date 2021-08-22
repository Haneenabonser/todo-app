import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';
import { Form, Button } from 'react-bootstrap';


const Login = () => {
  const contextType = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleShowForm() {
    setShowForm(true);
  }

  function changeUsername(e) {
    setUsername(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    contextType.login(username, password);
  }


  return (
    <>
      <Button variant="success" onClick={handleShowForm}>Login</Button>
      <If condition={contextType.loggedIn}>
        <Then>
          <Button variant="danger" onClick={contextType.logout}>Logout</Button>
        </Then>
        <Else>
          {showForm &&
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter Your Username" onChange={changeUsername} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" name="password" placeholder="Enter Your Password" onChange={changePassword} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          }
        </Else>
      </If>
    </>
  )
}

export default Login;