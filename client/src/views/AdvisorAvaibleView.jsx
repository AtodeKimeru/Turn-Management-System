import { AdvisorPanelAvaible } from "../components/Advisor/AdvisorPanelAvaible";
import { AdvisorLog } from "../scripts/AdvisorLog";

function AdvisorAvaibleView() {
  const { advisorDocument } = AdvisorLog()

  return (
    <>
      <h2>Asesor: {advisorDocument}</h2>
      <AdvisorPanelAvaible></AdvisorPanelAvaible>
    </>
  )
}

export { AdvisorAvaibleView }