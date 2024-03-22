import { AdvisorPanelInactive } from "../components/Advisor/AdvisorPanelInactive"
import { AdvisorId } from "../components/Advisor/AdvisorId"

function AdvisorInactiveView() {

  return (
    <>
      <AdvisorId></AdvisorId>
      <AdvisorPanelInactive></AdvisorPanelInactive>
    </>
  )
}

export { AdvisorInactiveView }