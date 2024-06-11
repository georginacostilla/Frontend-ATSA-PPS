import AdministratorButton from "./botonAdministrador/AdministratorButton";
import imagenLogo from "../../assets/media/logo-cent74.jpeg";
import "./Navigator.css";

const Navigator = () => {
  return (
    <nav className="container text-center">
      <div className="row mt-3">
        <div className="col-md-10">
          <a className="navbar-brand me-2" href="#">
            <img
              src={imagenLogo}
              height={120}
              alt="Cent 74"
            />
          </a>
          <h4>C.E.N.T Nº 74 - ATSA</h4>
        </div>
        <div className="col-md-2">
          <div className="d-flex m-4">
            <button className="btn btn-info rounded-4 me-4 ">Login</button>
            <AdministratorButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
