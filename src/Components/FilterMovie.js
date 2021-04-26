import { Button,NavDropdown,Navbar,Nav,Form,FormControl} from 'react-bootstrap';

function FilterMovie() {
    return (
        <div>
             <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Movie App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
  
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}

export default FilterMovie
