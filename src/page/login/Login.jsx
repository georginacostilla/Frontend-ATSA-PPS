import { FaUser } from 'react-icons/fa';
import '../login/login.css';

const Login = () => {
    return (
        <>
            <div className="container containerlogin mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="mb-4" id='card'>
                            <h1 className="text-center h2 mt-4 mb-4">INICIAR SESIÓN</h1>
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div className="card-body">
                    <div className="mb-3 text-center">
                        <FaUser className="user-icon" size={50} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="usuario" className="form-label textologin">Email</label>
                        <input type="text" className="form-control" id="usuario" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contrasena" className="form-label textologin">Contraseña</label>
                        <input type="password" className="form-control" id="contrasena" />
                    </div>
                    <div className="mb-2 form-check form-check-inline d-flex align-items-center justify-content-center">
                        <input type="checkbox" className="form-check-input" id="recordar" />
                        <label className="form-check-label mx-2" htmlFor="recordar">Recordar sesión</label>
                    </div>
                    <div className="mb-4 text-center">
                        <button type="submit" className="btn botonlogin btn-block">Iniciar sesión</button>
                        <div className="mt-3">
                            {/* <Link to="/register" className='mensajelogin'>¿Aún no tienes cuenta?, ¡regístrate!</Link> */}
                        </div>
                    </div>
                </div>
            </form>
        </>

    )
}

export default Login