function UserRequest({ userDocument, OpenModalPriority, OpenModalTurnCreated}) {

  const onRequestPriority = () => {
    OpenModalPriority();
    console.log('Solicitar cita prioritaria');
    console.log('Documento:', userDocument);
  }

  const onRequestGeneral = () => {
    OpenModalTurnCreated();
    console.log('Solicitar cita general');
    console.log('Documento:', userDocument);
  }

  return (
    <div className = "user_request_turn_container">
      <h1>Tipo de cita a solicitar</h1>
      <button className="button_xl_1" onClick={onRequestPriority}>Prioritario</button>
      <button className="button_xl_2" onClick={onRequestGeneral}>General</button>
    </div>
  )
}

export {UserRequest}