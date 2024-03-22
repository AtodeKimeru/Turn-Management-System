function AdvisorLog(){
  let advisorDocument = ''

  const LogAdvisor = (document) => {
    advisorDocument = document
    console.log('Asesor Logeado:', advisorDocument)
  }

  return {
    advisorDocument,
    LogAdvisor
  }
}

export { AdvisorLog }