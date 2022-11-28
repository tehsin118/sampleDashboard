import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/account/Login";
import Signup from "./components/account/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Detail from "./components/dashboard/Detail";

import Investor from "./components/investor/Investor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/invest" element={<Investor />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
