function UserDocument() {

    // Variable temporal para guardar informacion del usuario
    let userId = ''

    // Funcion para guardar el documento del usuario
    const saveDocument = (document) => {
      console.log('Guardando documento:', document)
      userId = document
      console.log('Documento guardado:', userId)
    }

    return {
      userId,
      saveDocument
    }
}

export { UserDocument }