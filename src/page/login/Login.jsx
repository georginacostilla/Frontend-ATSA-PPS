import { Button, Form } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import '../login/login.css';

const Login = () => {
    return (
        <>
            <div className='container text-center'>
                <Form>
                    <div className="mt-3 mb-3">
                        <FaUser className="m-4" size={30} />
                    </div>
                    <Form.Group className="mt-3 mb-3 w-50" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar correo electrónico" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mt-3 mb-3 w-50" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresar contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-2 mb-2'>
                        Iniciar sesión
                    </Button>
                    <div className="mt-3">
                        ¿Aún no tienes cuenta?, ¡Regístrate!
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login