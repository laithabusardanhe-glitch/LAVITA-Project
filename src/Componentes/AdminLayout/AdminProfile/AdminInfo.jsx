import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  Container, 
  Typography, 
  Divider, 
  Box, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Select, 
  MenuItem 
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext.jsx";
import toast from "react-hot-toast";

export default function AdminInfo() {
  const { currentUser, users, setUsers } = useContext(UserContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [role, setRole] = useState(currentUser?.role || "user");

  if (!currentUser) {
    return <Typography>Loading...</Typography>;
  }

  const handleSave = () => {
    const updatedUsers = users.map((u) =>
      u.id === currentUser.id ? { ...u, name, email, role } : u
    );
    setUsers(updatedUsers);
    toast.success("Profile updated successfully");
    setOpenDialog(false);
  };

  return (
    <Container>
      <Card sx={{ borderRadius: 3, m: 3, bgcolor: "beige" }}>
        <CardHeader 
          title="My Info" 
          sx={{ textAlign: "center", fontWeight: "bold" }} 
        />
        <Divider />
        <CardContent>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" color="text.secondary">
              Name: {currentUser.name}
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" color="text.secondary">
              Email: {currentUser.email}
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" color="text.secondary">
              Role: {currentUser.role}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => setOpenDialog(true)}
            >
              Edit
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            sx={{ mt: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            sx={{ mt: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="success" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
