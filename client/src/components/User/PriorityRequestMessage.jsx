function PriorityRequestMessage({ OpenModalTurnCreated, CloseModal}) {

  const onConfirm = () => {
    CloseModal()
    OpenModalTurnCreated()
  }

  const onCancel = () => {
    CloseModal()
  }


  return (
    <div className="modal_content">
      <p className="text-small">Advertencia: Uso exclusivo para servicios prioritarios</p>
      <p className="text">La opción PRIORITARIO está reservada únicamente para aquellos servicios considerados de alta prioridad. Si si solicitud no corresponde a esta categoría, le pedimos amablemente que no seleccione esta opción, ya que de lo contrario no podremos atender su solicitud. Agradecemos su comprensión y colaboración.</p>

      <div className="modal_buttons_container">
        <button className="button_l_2" onClick={onCancel}>Cancelar</button>
        <button className="button_l_1" onClick={onConfirm}>Confirmar</button>
      </div>
      
    </div>
  )
}

export { PriorityRequestMessage }