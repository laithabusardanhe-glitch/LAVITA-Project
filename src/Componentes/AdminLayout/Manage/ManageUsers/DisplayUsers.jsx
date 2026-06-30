import React, { useContext, useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Select,
  MenuItem,
} from "@mui/material";
import { UserContext } from "../../../../Context/UserContext.jsx";
import toast from "react-hot-toast";

export default function DisplayUsers() {
  const { users, setUsers } = useContext(UserContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [editRole, setEditRole] = useState("");

 
  const handleDeleteClick = (id) => {
    setSelectedUserId(id);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter((user) => user.id !== selectedUserId));
    toast.success("User deleted successfully");
    setOpenDialog(false);
    setSelectedUserId(null);
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
    setSelectedUserId(null);
  };

  const handleEditClick = (id, currentRole) => {
    setSelectedUserId(id);
    setEditRole(currentRole);
    setOpenDialog("edit");
  };

  const handleConfirmEdit = () => {
    setUsers(
      users.map((user) =>
        user.id === selectedUserId ? { ...user, role: editRole } : user
      )
    );
    toast.success("User role updated successfully");
    setOpenDialog(false);
    setSelectedUserId(null);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Manage Users
        </Typography>

        {users.length === 0 ? (
          <Typography align="center" color="text.secondary">
            No users found
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell><b>Role</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEditClick(user.id, user.role)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDeleteClick(user.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>

      {openDialog === true && (
        <Dialog open={openDialog} onClose={handleCancelDelete}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      )}

      
      {openDialog === "edit" && (
        <Dialog open={true} onClose={handleCancelDelete}>
          <DialogTitle>Edit User Role</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Change the role of this user:
            </DialogContentText>
            <Select
              value={editRole}
              onChange={(e) => setEditRole(e.target.value)}
              fullWidth
              sx={{ mt: 2 }}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmEdit} color="success" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
}
