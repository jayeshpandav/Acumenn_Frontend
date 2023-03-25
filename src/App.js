import "./App.css";
import NavbarComp from "./components/NavbarComp";
import NumUntilDepleted from "./pages/NumUntilDepleted";
import ReqSip from "./pages/ReqSip";
import SwpWithrawal from "./pages/SwpWithdrawal";
import TotalWithdrawn from "./pages/TotalWithdrawn";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FooterCom from "./components/FooterCom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/reqsip" element={<ReqSip />} />
          <Route exact path="/swpwithdrawal" element={<SwpWithrawal />} />
          <Route
            exact
            path="/numuntildepleted"
            element={<NumUntilDepleted />}
          />
          <Route exact path="/totalwithdrawn" element={<TotalWithdrawn />} />
        </Routes>
        <FooterCom />
      </div>
    </Router>
  );
}

export default App;
