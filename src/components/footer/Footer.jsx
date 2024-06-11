import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import logoImg from '../../assets/media/logo-atsa-removebg.png';
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer className="p-5 color-fondo mt-5">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className='row d-flex flex-column text-center'>
          <div className='col-md-12 mt-2'>
            <img src={logoImg} className='imgLogoATSA' alt="Logo de ATSA" />
          </div>

          <div className="col-md-12 mt-3">
            <ul className="list-unstyled d-flex flex-row gap-3 justify-content-center me-3 tamanioRedes">
              <li className="mt-3">
              </li>
              <li className="mt-3">
                <a href="https://cent74atsatucuman.ar/" target='_blank' className='tamanioRedes'><FaEnvelope /></a>
              </li>
              <li className="mt-3">
                <a href="https://www.instagram.com/atsa.tucuman/" target='_blank' className='tamanioRedes'><FaInstagram /></a>
              </li>
              <li className="mt-3">
                <a href="https://www.facebook.com/groups/487694001671842/?locale=es_LA" target='_blank' className='tamanioRedes'><FaFacebook /></a>
              </li>
            </ul>
          </div>

          <div className='col-md-12 mt-3'>
            <p> &copy; Sistema C.E.N.T. n° 74 2024 - Todos los derechos reservados </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer