
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';

// Toast config
import { ToastContainer } from 'react-toastify';
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
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        
        {/* Admin Routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/update/:id' element={<AdminUpdate/>} />

      </Routes>
    </Router>
  );
}



// Task :
// Create seperate page for Login and Register

export default App;

// TAsk 
// 1. Create a path for login page
// 2. Make a UI
// 3. Make a useState