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
function Navbar() {
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
        <Typography variant="h4" sx={{ flexGrow: 1,
            mr:30,
         }}>
          LAVETA
        </Typography>

        <Box>
            <MenuList sx={{
                display:"flex",
                flexDirection:"row",
    justifyContent: "center",
    p:5,
    flexWrap:"wrap"

            }}>
          <MenuItem>Home </MenuItem>
          <MenuItem >Contact</MenuItem>
          <MenuItem>Menu</MenuItem>
          <MenuItem>About Us</MenuItem>
            </MenuList>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;