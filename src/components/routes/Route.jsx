import { Routes, Route } from 'react-router-dom';
import Login from '../../page/login/Login';

const Route = () => {
    return (
        <>
            <Routes>
               <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default Route