import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  Container, 
  Typography, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField 
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/UserContext.jsx";
import toast from "react-hot-toast";

export default function AdminPassword() {
  const { currentUser, users, setUsers } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  if (!currentUser) {
    return <Typography>Loading...</Typography>;
  }

  const handleSavePassword = () => {
    if (!newPassword) {
      toast.error("Please enter a new password");
      return;
    }

    const updatedUsers = users.map((u) =>
      u.id === currentUser.id ? { ...u, password: newPassword } : u
    );
    setUsers(updatedUsers);
    toast.success("Password updated successfully");
    setOpenDialog(false);
    setNewPassword("");
  };

  return (
    <Container>
      <Card sx={{ borderRadius: 3, m: 3, bgcolor: "beige" }}>
        <CardHeader title="My Password" />
        <CardContent>
          <Typography>
            {show ? currentUser.password : "****"}
          </Typography>

          <Button
            variant="contained"
            sx={{ m: 1 }}
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"}
          </Button>

          <Button
            variant="outlined"
            color="primary"
            sx={{ m: 1 }}
            onClick={() => setOpenDialog(true)}
          >
            Change
          </Button>
        </CardContent>
      </Card>

    
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            label="New Password"
            type="password"
            fullWidth
            sx={{ mt: 2 }}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSavePassword} color="success" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
