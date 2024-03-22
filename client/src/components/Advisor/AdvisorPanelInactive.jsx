function AdvisorPanelInactive() {

  const onStartAdvisor = () => {
    console.log('Advisor started')
  }

  const onCallManually = () => {
    console.log('Call Manually')
  }

  return (
    <>
      <h1>Estado Asesor: Inactivo</h1>
      <h3>Tiempo Estado Actual: #</h3>

      <button onClick={onStartAdvisor}>Iniciar</button>
      <button onClick={onCallManually}>Llamada Manual</button>

      <p>Turnos en Cola: #</p>
    </>
  )
}

export { AdvisorPanelInactive }