import { useEffect } from "react"

function TurnCreationMessage({ CloseModal }) {

  useEffect(() => {
    setTimeout(() => {
      CloseModal()
    }, 4000)
  }, [])

  return (
    <div className="modal_content">
      <h2>Turno</h2>
      <h1>N. #</h1>
    </div>
  )
}

export { TurnCreationMessage }