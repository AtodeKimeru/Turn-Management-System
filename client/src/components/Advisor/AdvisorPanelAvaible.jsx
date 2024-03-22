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
    <>
      <h1>Estado Asesor: Disponible</h1>
      <h3>Tiempo Estado Actual: #</h3>

      <button onClick={onCallManually}>Llamada Manual</button>
      <button onClick={onInatended}>No Atendido</button>
      <button onClick={onStartTurn}>Comenzar Turno</button>

      <p>Turnos en Cola: #</p>
    </>
  )
}

export { AdvisorPanelAvaible }