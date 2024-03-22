function AdvisorPanelInTurn() {

  const onEndTurn = () => {
    console.log('Turno finalizado')
  }

  return (
    <div className="advisor_panel_container">
      <div className="advisor_panel_title">
        <h1>Estado Asesor: Inactivo</h1>
        <h3>Tiempo Estado Actual: #</h3>
      </div>

      <div className="advisor_panel_buttons">
        <button className="button_xl_1" onClick={onEndTurn}>Terminar Turno</button>
      </div>

      <div className="advisor_panel_info">
        <h2>
          Información del Turno
        </h2>
        <h3>Turno Actual: #</h3>
        <h3>Usuario: #</h3>
        <h3>Documento: #</h3>
      </div>

      <p className="principal">Turnos en Cola: #</p>
    </div>
  )
}

export { AdvisorPanelInTurn }