import { UseInfo } from "../customHooks/UseInfo"
import { UserLog } from "../components/User/UserLog"
import { AdvisorLog } from "../scripts/AdvisorLog"

function AdvisorLogView() {

  const { infoStates, setInfoState } = UseInfo()

  const { LogAdvisor } = AdvisorLog()

  const { document } = infoStates

  const { setDocument } = setInfoState

  return (
    <>
      <UserLog document={document} setDocument={setDocument} logUser={LogAdvisor} docLimit={1}></UserLog>
    </>
  )
}

export  {AdvisorLogView}