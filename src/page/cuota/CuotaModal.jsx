

const CuotaModal = () => {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col">
                <button className="btn btn-primary btn-light" data-bs-toggle="modal" data-bs-target="#mi-modal">Abril Modal</button>
                <div className="modal fade" id="mi-modal" tabIndex="1" aria-hidden="true" aria-labelledby="label-modal">
                    
                    <div className="modal-dialog">
                        
                        <div className="modal-content">
                            
                             <div className="modal-header">
                                <h5 className="modal-title">Cuota</h5>
                                <button className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                             </div>
                            
                             <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="cicloLectivo" className="form-label">Alumno:</label>
                                        <input type="text" className="form-control" id="cicloLectivo" placeholder="Nombre y apellido"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="arancel" className="form-label">Adeuda arancel:</label>
                                        <input type="checkbox" className="form-check" id="arancel"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="comentarios" className="form-label">Comentarios</label>
                                        <textarea name="" id="comentarios" rows="10" cols="20" className="form-control"></textarea>
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

export default CuotaModal