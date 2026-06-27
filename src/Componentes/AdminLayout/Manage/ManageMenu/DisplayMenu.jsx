import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";
import useMenu from "../../../../Hooks/useMenu.js"; 

export default function DisplayMenu() {
  const { menu, setMenu } = useMenu();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [editData, setEditData] = useState({ name: "", price: "", category: "" });


  const handleDeleteClick = (id) => {
    setSelectedItemId(id);
    setOpenDeleteDialog(true);
  };


  const handleConfirmDelete = () => {
    setMenu(menu.filter((item) => item.id !== selectedItemId));
    toast.success("Menu item deleted successfully");
    setOpenDeleteDialog(false);
    setSelectedItemId(null);
  };

  const handleCancelDelete = () => {
    setOpenDeleteDialog(false);
    setSelectedItemId(null);
  };

  const handleEditClick = (item) => {
    setSelectedItemId(item.id);
    setEditData({ name: item.name, price: item.price, category: item.category });
    setOpenEditDialog(true);
  };

 
  const handleSaveEdit = () => {
    setMenu(
      menu.map((item) =>
        item.id === selectedItemId ? { ...item, ...editData } : item
      )
    );
    toast.success("Menu item updated successfully");
    setOpenEditDialog(false);
    setSelectedItemId(null);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Manage Menu
        </Typography>

        {menu.length === 0 ? (
          <Typography align="center" color="text.secondary">
            No menu items found
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Price</b></TableCell>
                <TableCell><b>Category</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDeleteClick(item.id)}
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

      <Dialog open={openDeleteDialog} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this menu item? This action cannot be undone.
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

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Edit Menu Item</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            label="Name"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <TextField
            label="Price"
            type="number"
            value={editData.price}
            onChange={(e) => setEditData({ ...editData, price: e.target.value })}
          />
          <TextField
            label="Category"
            value={editData.category}
            onChange={(e) => setEditData({ ...editData, category: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="success" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
