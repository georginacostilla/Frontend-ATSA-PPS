

const DocenteModal = () => {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <button className="btn btn-primary btn-light" data-bs-toggle="modal" data-bs-target="#mi-modal">Abril Modal</button>
                <div className="modal fade" id="mi-modal" tabIndex="1" aria-hidden="true" aria-labelledby="label-modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                             <div className="modal-header">
                                <h5 className="modal-title">Docente</h5>
                                <button className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                             </div>
                             <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="cuil" className="form-label">CUIL:</label>
                                        <input type="text" className="form-control" id="cuil"/>
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
                                        <label htmlFor="domicilio" className="form-label">Domicilio:</label>
                                        <input type="text" className="form-control" id="domicilio"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="forma-label">Teléfono:</label>
                                        <input type="text" className="form-control" id="telefono"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="titulo" className="forma-label">Título:</label>
                                        <input type="text" className="form-control" id="titulo"/>
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

export default DocenteModal