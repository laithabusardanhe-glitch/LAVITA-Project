import { Box, Container, Typography } from "@mui/material";
import SideBar from "../../src/Componentes/AdminLayout/SideBar/SideBar.jsx";
import { useState } from "react";
import DisplayUsers from "../../src/Componentes/AdminLayout/Manage/ManageUsers/DisplayUsers.jsx";
import DisplayMassege from "../../src/Componentes/AdminLayout/Manage/ManageMassege//DisplayMassege.jsx";

export default  function Massege() {
    const [open , setOpen ]= useState(true);
    const toggleSidebar = () => {
        setOpen(!open)
    }
return(<>

<Container sx={{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    minWidth:"100%"
}}>
    <Box sx={{
        flexGrow:1,

    }}>
      <SideBar isOpen={open} toggleSidebar={toggleSidebar}/>
      </Box>
      <Box sx={{
        flexGrow:3
      }}>
        <DisplayMassege/>
  </Box>
 
</Container>
</>)


}