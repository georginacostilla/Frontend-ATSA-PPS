import { Button }  from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="d-grid gap-2 w-25">
                    <Button variant="primary" size="lg">
                        Cursada
                    </Button>
                    <Button variant="primary" size="lg">
                        Examenes
                    </Button>
                    <Button variant="primary" size="lg">
                        Alumnos
                    </Button>
                    <Button variant="primary" size="lg">
                        Cuotas
                    </Button>
                    <Button variant="primary" size="lg">
                        Docentes
                    </Button>
                    <Button variant="primary" size="lg">
                        Materias
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home;