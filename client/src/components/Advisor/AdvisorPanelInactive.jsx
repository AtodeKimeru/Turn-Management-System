function AdvisorPanelInactive() {

  const onStartAdvisor = () => {
    console.log('Advisor started')
  }

  const onCallManually = () => {
    console.log('Call Manually')
  }

  return (
    <div className="advisor_panel_container">
      <div className="advisor_panel_title">
        <h1>Estado Asesor: Inactivo</h1>
        <h3>Tiempo Estado Actual: #</h3>
      </div>

      <div className="advisor_panel_buttons">
        <button className="button_xl_1" onClick={onStartAdvisor}>Iniciar</button>
        <button className="button_l_2" onClick={onCallManually}>Llamada Manual</button>
      </div>

      <p className="principal">Turnos en Cola: #</p>
    </div>
  )
}

export { AdvisorPanelInactive }