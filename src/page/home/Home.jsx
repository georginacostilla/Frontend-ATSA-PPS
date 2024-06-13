import '../../components/navigate/botonAdministrador/adminButton.css';
import imagenLogo from '../../assets/media/logo-cent74-removebg.png';

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="d-grid gap-2 w-25">
                    <div className='text-center mb-1'>
                        <img
                            src={imagenLogo}
                            height={150}
                            alt="Cent 74"
                        />
                        <p><strong>C.E.N.T. 74</strong></p>
                    </div>
                    <button class="animated-button">
                        <span>Cursada</span>
                    </button>
                    <button class="animated-button">
                        <span>Examenes</span>
                    </button>
                    <button class="animated-button">
                        <span>Alumnos</span>
                    </button>
                    <button class="animated-button">
                        <span>Cuotas</span>
                    </button>
                    <button class="animated-button">
                        <span>Docentes</span>
                    </button>
                    <button class="animated-button">
                        <span>Materias</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home;