import { Routes, Route } from 'react-router-dom';
import Login from '../../page/login/Login';
import Register from '../../page/adminUsuario/Register';
import Home from '../../page/home/Home';
import Error404 from '../../page/error404/Error404';

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logueo" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    )
}

export default Rutas