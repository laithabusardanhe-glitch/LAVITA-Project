import React, { useState, useContext } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Navbar from "../../src/Componentes/Navbar/Navbar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MessageContext } from "../../src/Context/MessageContext.jsx";
import toast from "react-hot-toast";

export default function Contact() {
  const { messages, setMessages, approvedMessages } = useContext(MessageContext);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      ...formData,
    };
    setMessages([...messages, newMessage]);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2')",
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
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Contact Us
        </Typography>
      </Box>

      <Container sx={{ mt: 5, mb: 5 }}>
        <Paper elevation={4} sx={{ p: 4 }}>
          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom color="primary">
                Get in Touch
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                <EmailIcon color="primary" />
                <Typography variant="body1">info@laveta.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                <PhoneIcon color="primary" />
                <Typography variant="body1">+962-7-XXXX-XXXX</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body1">Amman, Jordan</Typography>
              </Box>
            </Grid>

          
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom color="primary">
                Send Us a Message
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
              >
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        
        {approvedMessages && approvedMessages.length > 0 && (
          <Paper elevation={4} sx={{ p: 4, mt: 5 }}>
            <Typography variant="h4" gutterBottom color="primary" align="center">
              Approved Messages
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
              {approvedMessages.map((msg) => (
                <Card key={msg.id} elevation={3}>
                  <CardContent>
                    <Typography variant="h6">{msg.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {msg.email}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {msg.message}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        )}
      </Container>
    </>
  );
}
