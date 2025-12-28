
import Nav from './Component/Nav';
import Services from './Component/Services';
import About from './Component/About';
import Team from './Component/Team';
  import Portfolio from './Component/Portfolio';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Footer from './Component/Footer';
import AddManager from './Admin/AddManagar';
import VeiwManagerList from './Admin/VeiwManagerList';
import Error from './Component/Error';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userReducer } from "./redux/userSlice";
import Admin from './Component/Admin';
import MyBookings from './Component/MyBookings';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      dispatch(userReducer({
        token: parsedUser.token,
        isLogin: true,
        role: parsedUser.role
      }));
    }
  }, []);
  
  return <div>

<Nav/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>

    <Route path='/services' element={<Services/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path='/team' element={<Team/>}></Route>
    <Route path="/addManager" element={<AddManager/>}></Route>
    <Route path='/manager' element={<VeiwManagerList/>}></Route>
    <Route path='/error' element={<Error/>}></Route>
    <Route path="/mybookings" element={<MyBookings />} />

    </Routes>
    
<br/>
<br/>
<Footer/>
  </div>
}

export default App;
