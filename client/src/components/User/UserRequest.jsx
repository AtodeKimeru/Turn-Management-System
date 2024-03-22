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
    <>
      <h1>Tipo de cita a solicitar</h1>
      <button onClick={onRequestPriority}>Prioritario</button>
      <button onClick={onRequestGeneral}>General</button>
    </>
  )
}

export {UserRequest}