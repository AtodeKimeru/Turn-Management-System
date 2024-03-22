import { TurnsPanel } from '../components/Turns/TurnsPanel'
import { TurnAttendedMessage } from '../components/Turns/TurnAttendedMessage.jsx'
import { Modal } from '../components/General/Modal.jsx'
import { ModalManage } from '../scripts/ModalManage.js'
import { useEffect } from 'react'

function CurrentTurnsView() {

  const { modalStates, modalCurrentTurn, CloseModalTurnToAttended } = ModalManage()

  // Para el modal modalCurrentTurn se debe cambiar desde le back
  // porque el mensaje de turno atendido debe ser enviado por el asesor y mostrarse en otra pantalla cliente

  useEffect(() => {}, [modalCurrentTurn])

  return (
    <>
      <h1 className="turns_title">Turnos en atención</h1>
      <TurnsPanel></TurnsPanel>
      {modalCurrentTurn == modalStates.turnToAttend && (
        <Modal>
          <TurnAttendedMessage CloseModalTurnToAttended={CloseModalTurnToAttended}></TurnAttendedMessage>
        </Modal>
      )}
    </>
  )
}

export { CurrentTurnsView }