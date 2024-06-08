import { Routes, Route } from 'react-router-dom';
import Login from '../../page/login/Login';
import Register from '../../page/register/Register';

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/logueo" element={<Login />} />
                <Route path="/registro" element={<Register />} />
            </Routes>
        </>
    )
}

export default Rutas