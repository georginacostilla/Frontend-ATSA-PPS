

const AdminUsuarioModal = () => {
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
                                      <label htmlFor="nombre" className="form-label">Nombres:</label>
                                      <input type="text" className="form-control" id="nombre"/>
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="apellido" className="form-label">Apellidos:</label>
                                      <input type="text" className="form-control" id="apellido"/>
                                  </div>                                   
                                  <div className="row">
                                      <div className="col-6 mb-3">
                                          <label htmlFor="domicilio" className="form-label">Contraseña:</label>
                                          <input type="text" className="form-control" id="domicilio"/>
                                      </div>
                                      <div className="col-6 mb-3">
                                          <label htmlFor="usuario" className="form-label">Usuario:</label>
                                          <input type="text" className="form-control" id="usuario"/>
                                      </div>
                                  </div> 
                                  <div className="mb-3">
                                      <label htmlFor="email" className="forma-label">Correo electrónico:</label>
                                      <input type="text" className="form-control" id="email"/>
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

export default AdminUsuarioModal

// campos: Apellido y nombre en un solo campo, correo y contraseña