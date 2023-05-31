
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
      src="data:image/jpeg;base64,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"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    
    </>
  );
}

export default App;
