// src/components/Footer/Footer.jsx
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box id="footer"
      component="footer"
      sx={{
        backgroundColor: "#fefefe",
        color: "#fff",
        textAlign: "center",
        py: 3,
        mt: 5,
      }}
    >
      <Typography variant="h6" sx={{color:"#000000"}} gutterBottom>
        Lavita Perfumes
      </Typography>

      <Typography variant="body2" sx={{ mb: 1, color:"#000000" }}>
        © {new Date().getFullYear()} Lavita. All rights reserved.
      </Typography>

     
    </Box>
  );
}

export default Footer;
