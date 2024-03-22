import { useEffect } from "react"

function TurnCreationMessage({ CloseModal }) {

  useEffect(() => {
    setTimeout(() => {
      CloseModal()
    }, 6000)
  }, [])

  return (
    <>
      <h2>Turno</h2>
      <h1>N. #</h1>
    </>
  )
}

export { TurnCreationMessage }