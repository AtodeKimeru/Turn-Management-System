import { AdvisorPanelInactive } from "../components/Advisor/AdvisorPanelInactive"
import { AdvisorLog } from "../scripts/AdvisorLog"
function AdvisorInactiveView() {

  const { advisorDocument } = AdvisorLog()

  return (
    <>
      <h2>Asesor: {advisorDocument}</h2>
      <AdvisorPanelInactive></AdvisorPanelInactive>
    </>
  )
}

export { AdvisorInactiveView }