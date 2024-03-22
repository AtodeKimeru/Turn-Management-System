function AdvisorPanelInTurn() {

  const onEndTurn = () => {
    console.log('Turno finalizado')
  }

  return (
    <>
      <h1>Estado Asesor: Inactivo</h1>
      <h3>Tiempo Estado Actual: #</h3>

      <button onClick={onEndTurn}>Terminar Turno</button>

      <div>
        <h2>
          Información del Turno
        </h2>
        <h3>Turno Actual: #</h3>
        <h3>Usuario: #</h3>
        <h3>Documento: #</h3>
      </div>

      <p>Turnos en Cola: #</p>
    </>
  )
}

export { AdvisorPanelInTurn }