import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLogView } from './views/UserLogView';
import { UserRequestView } from './views/UserRequestView';
import { AdvisorLogView } from './views/AdvisorLogView';
import { AdvisorInactiveView } from './views/AdvisorInactiveView';
import { AdvisorAvaibleView } from './views/AdvisorAvaibleView';
import { AdvisorInTurnView } from './views/AdvisorInTurnView';
import { StatsView } from './views/StatsView';
import { CurrentTurnsView } from './views/CurrentTurnsView';
import { NotFoundView } from './views/NotFoundView';

function App() {

  


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users/log" element={<UserLogView />} />
          <Route path="/users/request-turn" element={<UserRequestView />} />
          <Route path="/advisors/log" element={<AdvisorLogView />} />
          <Route path="/advisors/inactive" element={<AdvisorInactiveView />} />
          <Route path="/advisors/avaible" element={<AdvisorAvaibleView />} />
          <Route path="/advisors/in-turn" element={<AdvisorInTurnView />} />
          <Route path="/stats" element={<StatsView />} />
          <Route path="/turns" element={<CurrentTurnsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
