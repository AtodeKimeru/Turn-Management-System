import { useEffect } from 'react'

function TurnAttendedMessage({ CloseModalTurnToAttended }) {

  useEffect(() => {
    setTimeout(() => {
      CloseModalTurnToAttended()
    }, 4000)
  }, [])

  return (
    <div className="modal_content">
      <h2>Siguiente Turno</h2>
      <h1>N. #</h1>
      <h3>Asesor: #</h3>
    </div>
  )
}

export { TurnAttendedMessage }