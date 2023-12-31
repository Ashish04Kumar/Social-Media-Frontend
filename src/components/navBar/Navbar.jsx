// import "/home/bs/Documents/react-social-media-project/src/components/navBar/navbar.scss"
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { WbSunnyOutlined } from "@mui/icons-material";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const{currentUser} = useContext(AuthContext)


  return (
    
    <div className="navbar">
<div className="left">
    <Link to="/" style={{textDecoration: "none"}}>
    <span>lamasocial</span>
    </Link>

    <HomeOutlinedIcon />
   { darkMode ? <DarkModeOutlinedIcon  onClick = {toggle}/> : <WbSunnyOutlined onClick={toggle}/>}
    <GridViewOutlinedIcon />

    <div className="search" >
   <SearchOutlinedIcon />
   <input type="text" placeholder="Search..."/>
    </div>
</div>
<div className="right">
    <PersonOutlinedIcon />
    <EmailOutlinedIcon />
    <NotificationsOutlinedIcon />
    <div className="user">
        <img src={currentUser.profilePic} alt=""/>
        <span>{currentUser.name}</span>
    </div>

</div>
    </div>
  )
}

export default Navbar