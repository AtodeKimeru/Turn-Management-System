import { useState } from "react";

function UseInfo() {

  const [document, setDocument] = useState('')

  const infoStates = {
    document
  }

  const setInfoState = {
    setDocument
  }

  return {
    infoStates,
    setInfoState,
  }
}

export { UseInfo };