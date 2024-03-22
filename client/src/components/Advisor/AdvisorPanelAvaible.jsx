function AdvisorPanelAvaible() {

  const onCallManually = () => {
    console.log('Call Manually')
  }

  const onInatended = () => {
    console.log('No Atendido')
  }

  const onStartTurn = () => {
    console.log('Start Turn')
  }

  return (
    <div className="advisor_panel_container">
      <div className="advisor_panel_title">
        <h1>Estado Asesor: Disponible</h1>
        <h3>Tiempo Estado Actual: #</h3>
      </div>

      <div className="advisor_panel_buttons">
        <button className="button_l_2" onClick={onCallManually}>Llamada Manual</button>
        <button className="button_l_2" onClick={onInatended}>No Atendido</button>
        <button className="button_xl_1" onClick={onStartTurn}>Comenzar Turno</button>
      </div>

      <p className="principal">Turnos en Cola: #</p>
    </div>
  )
}

export { AdvisorPanelAvaible }