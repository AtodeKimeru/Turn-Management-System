function TurnsPanel() {

  // Turnos de prueba, estos se traerían de la base de datos y se pasan acá como props
  const turns = [
    {
      turn: "P2",
      advisor: "123"
    }, 
    {
      turn: "E1",
      advisor: "456"
    }, 
    {
      turn: "P1",
      advisor: "789"
    },
    {
      turn: "E2",
      advisor: "101"
    },
    {
      turn: "P3",
      advisor: "112"
    }
  ]

  // Traer los 4 o 5 turnos activos actualmente
  return (
    <div className="turns_container">
      <div className="turns_lastTurn turn_card">
        <div className="turns_turn">
          <h1>Turno Actual: {turns[0].turn}</h1>
        </div>
        <div className="turns_advisor">
          <p className="principal"> Asesor: {turns[0].advisor}</p>
        </div>
        
      </div>


      <div className="turns_activeList">
        {turns.slice(1).map((turn, index) => (
          <div key={index} className="turn_card">
            <div className="turns_turn">
              <h2>Turno Actual: {turn.turn}</h2>
            </div>
            <div className="turns_advisor">
              <p className="principal"> Asesor: {turn.advisor}</p>
            </div>
          </div>))}
        </div>

    </div>
  )
}

export { TurnsPanel }