

const AlumnoModal = () => {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <button className="btn btn-primary btn-light" data-bs-toggle="modal" data-bs-target="#mi-modal">Abril Modal</button>
                <div className="modal fade" id="mi-modal" tabIndex="1" aria-hidden="true" aria-labelledby="label-modal">
                    <div className="modal-dialog"> 
                        <div className="modal-content">
                             <div className="modal-header">
                                <h5 className="modal-title">Nuevo Alumno</h5>
                                <button className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                             </div>
                             <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-6 mb-3">
                                            <label htmlFor="cicloLectivo" className="form-label">Legajo:</label>
                                            <input type="text" className="form-control" id="cicloLectivo"/>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="dni" className="form-label">DNI:</label>
                                            <input type="text" className="form-control" id="dni"/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="apellido" className="form-label">Apellidos:</label>
                                        <input type="text" className="form-control" id="apellido"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombres:</label>
                                        <input type="text" className="form-control" id="nombre"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Carrera" className="form-label">Carrera: </label>
                                        <select className="form-select" id="carrera">
                                            <option selected> --Seleccione --</option>
                                            <option value="E">Enfermería</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className=" col-6 mb-3">
                                            <label htmlFor="plan" className="form-label">Plan:</label>
                                            <select className="form-select" id="plan">
                                                <option selected> -- Seleccione plan --</option>
                                                <option value="E2000">Plan 2000</option>
                                                <option value="E2011">Plan 2011</option>
                                                <option value="E2025">Plan 2025</option>
                                            </select>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label htmlFor="ingreso" className="forma-label">Año de ingreso:</label>
                                            <input type="number" className="form-select" id="ingreso"/>
                                        </div>
                                    </div> 
                                </form>
                             </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-primary">Guardar</button>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlumnoModal