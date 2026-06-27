import { Box, Container, Typography, Paper } from "@mui/material";
import SideBar from "../../src/Componentes/AdminLayout/SideBar/SideBar.jsx";
import { useState } from "react";

export default function AdminDashBoard() {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Container
     maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        p: 0,
        
      }}
    >
      <Box
        sx={{
          width: open ? "atuo" : "70px",
          transition: "width 0.3s ease",
          bgcolor: "background.paper",
          borderRight: "1px solid #ddd",
        }}
      >
        <SideBar isOpen={open} toggleSidebar={toggleSidebar} />
      </Box>

     
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "#f9f9f9",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, }}>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome to the admin panel. Here you can manage users, view reports,
            and control system settings.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
