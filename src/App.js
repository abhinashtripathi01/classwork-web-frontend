// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar';
import React from 'react';
//Toast config
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUpdate from './pages/admin/AdminUpdate';


function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />

        {/* Admin Routes */}
       <Route path= '/admin/dashboard' element={<AdminDashboard/>}/>
       <Route path = '/admin/update/:id' element={<AdminUpdate/>} />

      </Routes>

    </Router>
  );
}

export default App;

