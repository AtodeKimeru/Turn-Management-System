import { UseInfo } from "../customHooks/UseInfo"
import { UserLog } from "../components/User/UserLog"
import { UserDocument } from "../scripts/userDocument"

function UserLogView() {

  const { infoStates, setInfoState } = UseInfo()

  const { saveDocument } = UserDocument()

  const { document } = infoStates

  const { setDocument } = setInfoState

  return (
    <>
      <UserLog document={document} setDocument={setDocument} logUser={saveDocument} docLimit={4}></UserLog>
    </>
  )
}

export  {UserLogView}