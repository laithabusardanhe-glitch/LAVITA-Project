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
function Navbar() {
   const navigate = useNavigate();
  return (
    <AppBar position="sticky">
      
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
         marginLeft:"100px",
        }} />
        <Typography variant="h4" sx={{ flexGrow: 1,
            mr:30,
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
          <MenuItem Button onClick={() => navigate("/") }>Home </MenuItem>
          <MenuItem >Contact</MenuItem>
          <MenuItem Button onClick={() => navigate("/menu") }>Menu</MenuItem>
          <MenuItem>About Us</MenuItem>
            </MenuList>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;