import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  MenuList,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useAuth } from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Theme from "../Theme/Theme";

function Navbar() {
   const navigate = useNavigate();
   const {logout} = useAuth();
   const handleOut =  () => {
    logout();
    toast.success("Logout is seccessfully");
  }
  const {currentUser} = useContext(UserContext);
  return (
    <AppBar  id="navbar" position="sticky" >
      
      <Toolbar sx={{
        display:"flex",
        justifyContent:"center",
        gap:5,
        alignItems:"center",
        flexWrap:"wrap",
        flexDirection:"row",
      }}>
        <img src="../../../src/assets/laita.jpg" style={{
          width:"50px" ,
         marginLeft:"50px",
         borderRadius:30
        }} />
        <Typography variant="h4" sx={{ flexGrow: 1,
            mr:2,
         }}>
          LAVITA
        </Typography>

        <Box>
            <MenuList sx={{
                display:"flex",
                flexDirection:"row",
    justifyContent: "center",
    p:5,
    flexWrap:"wrap"

            }}>
          <MenuItem onClick={() => navigate("/") }>Home </MenuItem>
          <MenuItem onClick={() => navigate("/contact") }>Contact</MenuItem>
          <MenuItem  onClick={() => navigate("/menu") }>Menu</MenuItem>
          <MenuItem onClick={() => navigate("/about/us") }>About Us</MenuItem>
          <Theme/>
          {!currentUser ? (
            <>
          <MenuItem  onClick={() => navigate("/register") }>Register</MenuItem>
          <MenuItem  onClick={() => navigate("/login") }>Login</MenuItem>

        </>
          ) : (
            <MenuItem  onClick={handleOut}>Logout</MenuItem>
          )}
            </MenuList>
        </Box>

      </Toolbar>
    </AppBar>
  ); 
}

export default Navbar;