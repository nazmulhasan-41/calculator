import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className='linkClass appTitle' to="/"><h4>Calculate</h4></Link>
                    

                    <Nav className="me-auto">
                    
                        <Link  className='linkClass' to="/">Home</Link>
                        <Link className='linkClass' to="/header">Header</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;