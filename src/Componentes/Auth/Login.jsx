import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const { login } = useAuth();

  const handleLogin = () => {
    let newErrors = { email: "", password: "" };

    if (!userData.email) {
      newErrors.email = "Email is required";
    }
    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 4) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      login(userData);
    }
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
        elevation={10}
        sx={{
          width: 450,
          p: 5,
          borderRadius: 4,
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              variant="h3"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Login
            </Typography>

            <Typography
              variant="body2"
              sx={{ textAlign: "center", color: "text.secondary" }}
            >
              Welcome back to Perfume Store
            </Typography>

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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              required
              value={userData.password}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={!userData.email || !userData.password}
            >
              Login
            </Button>

            <Typography sx={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Register
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
