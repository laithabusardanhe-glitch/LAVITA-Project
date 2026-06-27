import { Box, Container, Typography, Paper, Divider } from "@mui/material";
import SideBar from "../../src/Componentes/AdminLayout/SideBar/SideBar.jsx";
import { useState } from "react";
import AdminInfo from "../../src/Componentes/AdminLayout/AdminProfile/AdminInfo.jsx";
import AdminPassword from "../../src/Componentes/AdminLayout/AdminProfile/AdminPassword.jsx";

export default function AdminProfile() {
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
          width: open ? "auto" : "70px",
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
          p: 4,
          bgcolor: "#f9f9f9",
        }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            Admin Profile
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <AdminInfo />
          </Paper>

          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Change Password
            </Typography>
            <AdminPassword />
          </Paper>
        </Paper>
      </Box>
    </Container>
  );
}
