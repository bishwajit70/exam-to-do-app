import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addtask' element={<RequireAuth><AddTask></AddTask></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
