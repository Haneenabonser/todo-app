import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container } from 'react-bootstrap';

function Header(props) {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
