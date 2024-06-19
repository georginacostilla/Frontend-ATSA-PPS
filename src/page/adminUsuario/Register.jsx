import { Form, Button, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <div className="container-fluid contenedorregistro mt-4 mb-5 ">
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-10">
          <div className="text-center mt-4 tituloregistro">
            <h2 className='mb-4'>REGÍSTRATE</h2>
          </div>
          <div>
            <Form>
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="nombre">nombre</Form.Label>
                  <Form.Control type="text" id="nombre" name="nombre" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="apellido">apellido</Form.Label>
                  <Form.Control type="text" id="apellido" name="apellido" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="usuario">usuario</Form.Label>
                  <Form.Control type="text" id="usuario" name="usuario" required pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" minLength="5" maxLength="20" />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="contrasena">contraseña</Form.Label>
                  <Form.Control type="password" id="contrasena" name="contrasena" required minLength="5" maxLength="15" />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} sm={6}>
                  <Form.Label htmlFor="email">email</Form.Label>
                  <Form.Control type="email" id="email" name="email" required minLength="11" maxLength="20" />
                </Col>
              </Row>
              <div className="text-center mt-5">
                <Button type="submit" className="btn botonregis">Crear Cuenta</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register