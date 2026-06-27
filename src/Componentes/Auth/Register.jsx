import { useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";

function Register() {
  const { register } = useAuth();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = () => {
    register(userData);

    setUserData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 450,
          p: 5,
          borderRadius: 4,
        }}
      >
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
          >
            Register
          </Typography>

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
          >
            Create your account
          </Typography>

          <TextField
            label="Name"
            fullWidth
            required
            value={userData.name}
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={userData.email}
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={userData.password}
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
          />

          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({
                ...userData,
                confirmPassword: e.target.value,
              })
            }
          />

          <Button
            variant="contained"
            type="submit"
            size="large"
            disabled={
              !userData.name ||
              !userData.email ||
              !userData.password ||
              !userData.confirmPassword
            }
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;  