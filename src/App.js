import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
 
  Route,
  Outlet,
  Navigate,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { useContext } from "react";
import './style.scss'
import { DarkModeContext} from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

const App = () => {
 
  const {currentUser} =  useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode)
  console.log(currentUser);
  

  const Layout = () => {
    return (

      <div className={`theme-${darkMode ? "light" : "dark"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
        <div className="leftBar">
          <LeftBar />
        </div>
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          
         
          <RightBar />
        
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children})=>{
if(!currentUser)
{
  return <Navigate to='/login' />

}
return children;

  }
  
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
              </ProtectedRoute>
            
          }>
          <Route index element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
