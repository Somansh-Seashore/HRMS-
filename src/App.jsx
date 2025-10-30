import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import EmployeeProfile from "./pages/EmployeeProfile";
import AttendanceManagement from "./pages/AttendanceManagement";
import LeaveManagement from "./pages/LeaveManagement";
import Onboarding from "./pages/Onboarding";
import PerformanceManagement from "./pages/PerformanceManagement";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<EmployeeDirectory />} />
              <Route path="/profile/:id" element={<EmployeeProfile />} />
              <Route path="/attendance" element={<AttendanceManagement />} />
              <Route path="/leave" element={<LeaveManagement />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/performance" element={<PerformanceManagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
