import { FaDeleteLeft } from "react-icons/fa6";

function UserLog({ document, setDocument, logUser ,docLimit }) {

  const onDocumentChange = (event) => {
    setDocument(event.target.value)
  }

  const onAdd = (number) => {
    setDocument(document + number)
  }

  const onDelete = () => {
    setDocument(document.slice(0, -1))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    logUser(document)
  }

    return (
      <div className="user_log_container">
        <h1>Bienvenido, por favor escriba su número de identificación</h1>
        <form onSubmit={onSubmit} className="user_log_form">
          <input className="document_input" type="number" value={document} onChange={onDocumentChange} disabled/>

          <div className="user_log_buttons">
            <button type='button' className="document_input_button" onClick={() => onAdd(1)}>1</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(2)}>2</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(3)}>3</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(4)}>4</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(5)}>5</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(6)}>6</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(7)}>7</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(8)}>8</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(9)}>9</button>
            <button type='button' className="document_input_button" onClick={() => onAdd(0)}>0</button>
            <button type='button' className="document_input_button delete"onClick={onDelete}>
              <FaDeleteLeft></FaDeleteLeft>
            </button>
          </div>

          <button type="submit" className="button_s_1" disabled={!(document.length >= docLimit)} >Enviar</button>
        </form>
      </div>
    )
}

export { UserLog }
