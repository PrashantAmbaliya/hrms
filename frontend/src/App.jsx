import './App.css';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import Employee from './pages/Employee';
import DashboardProtectedRoutes from './middlewares/DashboardProtectedRoutes'

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashboardProtectedRoutes><Layout /></DashboardProtectedRoutes>}> 
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employee" element={<Employee />} />
          </Route>
        </Routes>
      </div>
      <Toaster  
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
