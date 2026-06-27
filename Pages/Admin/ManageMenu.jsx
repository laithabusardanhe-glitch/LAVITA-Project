import { Box, Container, Typography } from "@mui/material";
import SideBar from "../../src/Componentes/AdminLayout/SideBar/SideBar.jsx";
import { useState } from "react";
import DisplayMenu from "../../src/Componentes/AdminLayout/Manage/ManageMenu/DisplayMenu.jsx";

export default  function ManageMenu() {
    const [open , setOpen ]= useState(true);
    const toggleSidebar = () => {
        setOpen(!open)
    }
return(<>

<Container sx={{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    minWidth:"100%",
    height:"100vh",
    position:"sticky"
}}>
    <Box sx={{
        flexGrow:1,

    }}>
      <SideBar isOpen={open} toggleSidebar={toggleSidebar}/>
      </Box>
      <Box sx={{
        flexGrow:3
      }}>
  <DisplayMenu/>
  </Box>
 
</Container>
</>)


}