import { AdvisorPanelInTurn } from "../components/Advisor/AdvisorPanelInTurn";
import { AdvisorId } from "../components/Advisor/AdvisorId"

function AdvisorInTurnView() {

  return (
    <>
      <AdvisorId></AdvisorId>
      <AdvisorPanelInTurn></AdvisorPanelInTurn>
    </>
  )
}

export { AdvisorInTurnView }