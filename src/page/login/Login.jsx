import { Button, Form } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import '../../components/footer/Footer.css';
import { useContext } from 'react';
import { userProvider } from '../../context/UserContext';

const Login = () => {
    return (
        <>
            <div className='container d-flex justify-content-center text-center m-5'>
                <Form className='row d-flex flex-column containerlogin'>
                    <div className="mb-3 col">
                        <FaUser className="tamanioRedes" size={35} />
                    </div>

                    <Form.Group className="mt-3 mb-3 col" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ingresar correo electrónico" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mt-3 mb-3 col" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresar contraseña" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-2 mb-2 col'>
                        Iniciar sesión
                    </Button>
                    <div className="mt-3 col">
                        ¿Aún no tienes cuenta?, ¡Regístrate!
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login