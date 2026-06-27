import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import Navbar from "../../src/Componentes/Navbar/Navbar";
import GroupsIcon from "@mui/icons-material/Groups";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function AboutUs() {
  return (
    <>
      <Navbar />

    
      <Box
        sx={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526045612212-70caf35c14df')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          Welcome to LAVETA
        </Typography>
      </Box>

      <Container sx={{ mt: 5, mb: 5 }}>
        <Paper elevation={4} sx={{ p: 4 }}>
          <Typography variant="h3" gutterBottom align="center" color="primary">
            About Us
          </Typography>

          <Grid container spacing={4} sx={{ mt: 3 }}>
         
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <GroupsIcon color="primary" fontSize="large" />
                <Typography variant="h5">Who We Are</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                At LAVETA, we believe that fragrances are more than just scents —
                they are experiences, emotions, and memories. Our mission is to
                craft perfumes that reflect elegance, confidence, and individuality.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <VisibilityIcon color="primary" fontSize="large" />
                <Typography variant="h5">Our Vision</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                We aim to become a leading perfume brand that inspires people
                worldwide. By combining timeless classics with modern creativity,
                we deliver fragrances that suit every occasion and personality.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <FavoriteIcon color="primary" fontSize="large" />
                <Typography variant="h5">Our Values</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                • Quality and authenticity in every product <br />
                • Customer satisfaction and trust <br />
                • Innovation while preserving tradition <br />
                • Sustainability and respect for nature
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <EmailIcon color="primary" fontSize="large" />
                <Typography variant="h5">Contact Us</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Have questions or want to know more? Reach out to us anytime:  
                <br />
                <EmailIcon sx={{ verticalAlign: "middle", mr: 1 }} /> info@laveta.com  
                <br />
                <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} /> +962-7-1234-5678
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
