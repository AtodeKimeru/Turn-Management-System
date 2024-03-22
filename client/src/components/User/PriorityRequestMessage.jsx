function PriorityRequestMessage({ OpenModalTurnCreated, CloseModal}) {

  const onConfirm = () => {
    CloseModal()
    OpenModalTurnCreated()
  }

  const onCancel = () => {
    CloseModal()
  }


  return (
    <>
      <p>Advertencia: Uso exclusivo para servicios prioritarios</p>
      <p>La opción PRIORITARIO está reservada únicamente para aquellos servicios considerados de alta prioridad. Si si solicitud no corresponde a esta categoría, le pedimos amablemente que no seleccione esta opción, ya que de lo contrario no podremos atender su solicitud. Agradecemos su comprensión y colaboración.</p>

      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onCancel}>Cancelar</button>
    </>
  )
}

export { PriorityRequestMessage }