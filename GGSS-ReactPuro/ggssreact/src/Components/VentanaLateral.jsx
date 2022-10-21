// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

function VetanaLateral() {
  return (
    <>
    <Navbar 
        bg="light" 
        className="shadow-sm p-0 mb-0 bg-light"
        
        >
          <Container fluid>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Legajo"
                    className="me-2"
                    aria-label="Search"
                  />
                  {/* <Button variant="outline-success">Buscar</Button> */}
                </Form>
          </Container>
        </Navbar>
      <Navbar 
        bg="light" 
        className="shadow-sm p-0 mb-0 bg-light"
        >
          <Container fluid>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Apellidos y Nombres"
                    className="me-2"
                    aria-label="Search"
                  />
                  {/* <Button variant="outline-success">Buscar</Button> */}
                </Form>
          </Container>
        </Navbar>
        <table class="table table-striped col-5">
  
  <thead>
    <tr>
      <th scope="col">#</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nombres</th>
    </tr>
    <tr>
      <th scope="row">Nombres</th>
    </tr>
    <tr>
      <th scope="row">Nombres</th>
    </tr>
    <tr>
      <th scope="row">Nombres</th>
     </tr>
  </tbody>
</table>
    </>
  );
}

export default VetanaLateral;