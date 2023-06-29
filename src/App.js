

import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" bg="dark" variant="dark">
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
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="my-3 px-4">
            <Col sm={7}>
              <Image
                src="https://vuku-dev.s3.amazonaws.com/raymond-lee-C_cPa1FbUtM-unsplash.jpg"
                rounded
                fluid
              />
            </Col>
            <Col sm={5}>
              <h2 className="font-weight-light">Billionarie's Club</h2>
              <p className="mt-2">
                Only Billionarie or willing to be a Billionarie are allowed in
                this club...
              </p>
              <Button variant="outline-primary">Hit me </Button>
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary py-5 my-3 text-white">
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src="https://picsum.photos/id/237/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button>Check Me</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Img src="https://picsum.photos/id/237/200" />
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button>Check Me</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src="https://picsum.photos/id/237/200" />

                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button>Check Me</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-5 my-5 bg-dark">
        <Container className="text-white px-4">
          <p>You can't copy this website bro!</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
