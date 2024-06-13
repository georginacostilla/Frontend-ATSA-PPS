import { Col, Container, Row } from 'react-bootstrap';
import '../error404/error404.css';

const Error404 = () => {
  return (
    <>
      <div className="mt-5 mb-5">
        <Container className="contenedor-404">
          <Row>
            <Col className="col-md-6 col-12 text-center">
              <p className="parrafo1 mb-1">Oops!</p>
              <p className="parrafo2 mb-1">404</p>
            </Col>
          </Row>
        </Container>
        <Container className="container contenedor-404 mt-0">
          <Row className="row justify-content-center">
            <p className="parrafo3 text-center mt-5 mb-5">Página no disponible</p>
            {/* <Col className="col-4 col-md-2 mb-4 mt-4 mb-md-0 btn btn-reg" href="" role="button" onClick={() => navigate("/")}>Regresar</Col> */}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Error404