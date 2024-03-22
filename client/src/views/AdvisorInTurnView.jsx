import { AdvisorPanelInTurn } from "../components/Advisor/AdvisorPanelInTurn";
import { AdvisorLog } from "../scripts/AdvisorLog";

function AdvisorInTurnView() {
  const { advisorDocument } = AdvisorLog()

  return (
    <>
      <h2>Asesor: {advisorDocument}</h2>
      <AdvisorPanelInTurn></AdvisorPanelInTurn>
    </>
  )
}

export { AdvisorInTurnView }