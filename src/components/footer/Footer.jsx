import { FaEnvelope, FaFacebook, FaInstagram} from 'react-icons/fa';
import '../footer/Footer.css'

const Footer = () => {
  return (
    <footer className="p-5 color-fondo">
      <div className="container centrar">
        <div className="row">
          <div className="col-md-4 mt-4">
            <ul className="list-unstyled tamanio-iconos d-flex flex-row gap-5 justify-content-center">
              <li className="mt-3">
              </li>
              <li className="mt-3">
                <a href="https://cent74atsatucuman.ar/" target='_blank'><FaEnvelope/></a>
              </li>
              <li className="mt-3">
              <a href="https://www.instagram.com/atsa.tucuman/" target='_blank'><FaInstagram/></a>
              </li>
              <li className="mt-3">
                <a href="https://www.facebook.com/groups/487694001671842/?locale=es_LA" target='_blank'><FaFacebook /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p> &copy; Sistema Cent 74 2024 - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer