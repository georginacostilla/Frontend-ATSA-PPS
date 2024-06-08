import UserContext from './context/UserContext';
import Rutas from './components/routes/Rutas';
import Footer from './components/footer/Footer';
import '../src/App.css';

function App() {

  return (
    <>
      <UserContext>
        <Rutas />
      </UserContext>
      <Footer />
    </>
  )
}

export default App
