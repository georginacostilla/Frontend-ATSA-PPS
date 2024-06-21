

const ExamenModal = () => {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <button className="btn btn-primary btn-light" data-bs-toggle="modal" data-bs-target="#mi-modal">Abril Modal</button>
                <div className="modal fade" id="mi-modal" tabIndex="1" aria-hidden="true" aria-labelledby="label-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                             <div className="modal-header">
                                <h5 className="modal-title">Nueva Cursada</h5>
                                <button className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                             </div>
                             <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="cicloLectivo" className="form-label">Ciclo lectivo:</label>
                                        <input type="text" className="form-control" id="cicloLectivo"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="arrera" className="form-label">Carrera: </label>
                                        <select className="form-select" id="carrera">
                                            <option selected> --Seleccione --</option>
                                            <option value="E">Enfermería</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="materia" className="form-label">Materia:</label>
                                        <select className="form-select" id="materia">
                                            <option selected> -- Seleccione una materia --</option>
                                            <option value="EB">Enfermería Básica</option>
                                            <option value="EA">Anatomofisiología</option>
                                            <option value="EI">Inglés</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="plan" className="form-label">Plan:</label>
                                        <select className="form-select" id="plan">
                                            <option selected> -- Seleccione plan --</option>
                                            <option value="E2000">Plan 2000</option>
                                            <option value="E2011">Plan 2011</option>
                                            <option value="E2025">Plan 2025</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="turno" className="form-label">Turno:</label>
                                        <input type="text" className="form-control" id="turno"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="fecha" className="form-label">Fecha</label>
                                        <input type="date" className="form-control"/>
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

export default ExamenModal