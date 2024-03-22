import { UserRequest } from "../components/User/UserRequest"
import { UserDocument } from "../scripts/userDocument"
import { ModalManage } from "../scripts/ModalManage"
import { Modal } from "../components/General/Modal"
import { PriorityRequestMessage } from "../components/User/PriorityRequestMessage"
import { TurnCreationMessage } from "../components/Turns/TurnCreationMessage"
import { useEffect } from "react"

function UserRequestView() {
  const { userId  } = UserDocument()

  const { modalStates, modalState, OpenModalPriority, OpenModalTurnCreated, CloseModal } = ModalManage()

  useEffect(() => {}, [modalState])

  return (
    <>
      <UserRequest userDocument={userId} 
      OpenModalPriority={OpenModalPriority} 
      OpenModalTurnCreated={OpenModalTurnCreated} ></UserRequest>

      {modalState == modalStates.PriorityAdvice && (
        <Modal>
          <PriorityRequestMessage 
          OpenModalTurnCreated={OpenModalTurnCreated} 
          CloseModal={CloseModal}></PriorityRequestMessage>
        </Modal>
      )}

      {modalState == modalStates.TurnCreated && (
        <Modal>
          <TurnCreationMessage CloseModal={CloseModal}></TurnCreationMessage>
        </Modal>
      )}


    </>
  )
}

export { UserRequestView }