import React from 'react';
import {Nav,Navbar,Card} from 'react-bootstrap';
import logo from './lg.svg'
const Home = () => {
    return (
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">
  <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    CRUD Operaions Using React-Bootstrap
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
     
    </Nav>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link eventKey={2} href="/Products">
       Add Product
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  <br></br>
  <Card className="text-center">
  <Card.Header>CRUD Operations</Card.Header>
  <Card.Body>
    <Card.Title>CRUD Operations Using React Hooks</Card.Title>
    <Card.Text>
    In the project directory, you can run:

<h4>npm start</h4>
Runs the app in the development mode.<br></br>
Open http://localhost:3000 to view it in the browser.<br></br>

The page will reload if you make edits.<br></br>
You will also see any lint errors in the console.<br></br>

<h4>npm test</h4>
Launches the test runner in the interactive watch mode.<br></br>
See the section about running tests for more information.<br></br>

<h4>npm run build</h4>
Builds the app for production to the build folder.<br></br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br></br>
    </Card.Text>
    <a className="primary" href="/Products">Add Products</a>
  </Card.Body>
  <Card.Footer className="text-muted">CRUD Operations</Card.Footer>
</Card>
        </div>

    );
};

export default Home;
