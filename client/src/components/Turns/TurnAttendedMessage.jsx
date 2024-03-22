import { useEffect } from 'react'

function TurnAttendedMessage({ CloseModalTurnToAttended }) {

  useEffect(() => {
    setTimeout(() => {
      CloseModalTurnToAttended()
    }, 6000)
  }, [])

  return (
    <>
      <h2>Siguiente Turno</h2>
      <h1>N. #</h1>
      <h3>Asesor: #</h3>
    </>
  )
}

export { TurnAttendedMessage }