import { Routes, Route } from 'react-router-dom';
import Login from '../../page/login/Login';

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path="/logueo" element={<Login />} />
            </Routes>
        </>
    )
}

export default Rutas