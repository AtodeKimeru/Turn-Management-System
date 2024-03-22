import { useState } from 'react'

function ModalManage() {
  
  let modalStates = {
    PriorityAdvice : "PriorityAdvice",
    TurnCreated : "TurnCreated",
    turnToAttend : "on",
    Off : "off"
  }

  const [modalState, setModalState] = useState(modalStates.Off)
  const [modalCurrentTurn, setModalCurrentTurn] = useState(modalStates.Off)

  const OpenModalPriority = () => {
    setModalState(modalStates.PriorityAdvice)
    console.log('Modal Abierto:', modalState)
  }

  const OpenModalTurnCreated = () => {
    setModalState(modalStates.TurnCreated)
    console.log('Modal Abierto:', modalState)
  }

  const OpenModalTurnToAttended = () => {
    setModalCurrentTurn(modalStates.turnToAttend)
    console.log('Modal Abierto:', modalState)
  }

  const CloseModal = () => {
    setModalState(modalStates.Off)
    console.log('Modal Cerrado:', modalState)
  }

  const CloseModalTurnToAttended = () => {
    setModalCurrentTurn(modalStates.Off)
    console.log('Modal Cerrado:', modalState)
  }

  return {
    modalStates,
    modalState,
    modalCurrentTurn,
    OpenModalPriority,
    OpenModalTurnCreated,
    OpenModalTurnToAttended,
    CloseModal,
    CloseModalTurnToAttended
  }
}

export { ModalManage }