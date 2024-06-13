import UserContext from './context/UserContext';
import Rutas from './components/routes/Rutas';
import Footer from './components/footer/Footer';
import Navigator from './components/navigate/Navigator';
import '../src/App.css';

function App() {
  return (
    <>
      <UserContext>
        <Navigator />
        <Rutas />
      </UserContext>
      <Footer />
    </>
  );
}

export default App;
