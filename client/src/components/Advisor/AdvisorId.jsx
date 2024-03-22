import { AdvisorLog } from "../../scripts/AdvisorLog"

function AdvisorId() {

  const { advisorDocument } = AdvisorLog()
  
  return (
    <h2 className="advisor_panel_id">Asesor: {advisorDocument}</h2>
  )
}

export { AdvisorId }