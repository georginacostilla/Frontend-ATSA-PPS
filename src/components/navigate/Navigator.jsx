import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import AdministratorButton from './botonAdministrador/AdministratorButton';
import './botonAdministrador/adminButton.css';

const Navigator = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bgNavbar mt-3">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <FaHome style={{ color: 'gray' }} size={35} />
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><button className="disenoBoton">Iniciar sesión</button></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <AdministratorButton />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigator;
