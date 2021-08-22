import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { If, Else, Then } from 'react-if';
import { Form, Button, Col } from 'react-bootstrap';

const SignUp = () => {
	const contextType = useContext(AuthContext);
	const [showForm, setShowForm] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [role, setRole] = useState('user');

	function handleShowForm() {
		setShowForm(true);
	}

	function changeUsername(e) {
		setUsername(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		contextType.signup(username, password, role);
	}

	return (
		<>
			<Button variant="danger" onClick={handleShowForm}>Signup</Button>
			<If condition={contextType.loggedIn}>
				<Then>
					<div></div>
				</Then>
				<Else>
					{showForm &&
						<Form onSubmit={handleSubmitSignup} style={{ marginLeft: '50px' }}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Username</Form.Label>
								<Form.Control type="text" name="username" placeholder="Enter Username" onChange={changeUsername}/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" name="password" placeholder="Enter password" onChange={changePassword}/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Choose Your Role</Form.Label>
								<Form.Control type="text" name="role" placeholder="user, admin, editor" onChange={handleChangeRole}/>

								{/* <Form.Select defaultValue="Choose..." onChange={handleChangeRole}>
									<option value="user">user</option>
									<option value="editor">editor</option>
									<option value="admin">admin</option>
								</Form.Select> */}
							</Form.Group>

							<Button variant="primary" type="submit">
								Sign Up
							</Button>
						</Form>
					}
				</Else>
			</If>
		</>

	);
};

export default SignUp;