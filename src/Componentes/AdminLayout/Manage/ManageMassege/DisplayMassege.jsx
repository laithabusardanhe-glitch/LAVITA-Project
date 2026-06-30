import React, { useContext, useState } from "react";
import {
  Container,
  Paper,
  Typography,
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
} from "@mui/material";
import toast from "react-hot-toast";
import { MessageContext } from "../../../../Context/MessageContext.jsx";

export default function DisplayMassege() {
  const { messages, setMessages, approvedMessages, setApprovedMessages } = useContext(MessageContext);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleView = (msg) => {
    setSelectedMessage(msg);
    setOpenViewDialog(true);
  };

  const handleDeleteClick = (msg) => {
    setSelectedMessage(msg);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    setMessages(messages.filter((m) => m.id !== selectedMessage.id));
    toast.success("Message deleted successfully");
    setOpenDeleteDialog(false);
    setSelectedMessage(null);
  };

  const handleApprove = (msg) => {
  
    setApprovedMessages([...approvedMessages, msg]);
    toast.success("Message approved successfully");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Admin Messages
        </Typography>

        {messages.length === 0 ? (
          <Typography align="center" color="text.secondary">
            No messages found
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Email</b></TableCell>
                <TableCell><b>Message</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((msg) => (
                <TableRow key={msg.id}>
                  <TableCell>{msg.id}</TableCell>
                  <TableCell>{msg.name}</TableCell>
                  <TableCell>{msg.email}</TableCell>
                  <TableCell>
                    {msg.message.length > 30
                      ? msg.message.substring(0, 30) + "..."
                      : msg.message}
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleView(msg)}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => handleApprove(msg)}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDeleteClick(msg)}
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

    
      <Dialog open={openViewDialog} onClose={() => setOpenViewDialog(false)}>
        <DialogTitle>Message Details</DialogTitle>
        <DialogContent>
          {selectedMessage && (
            <>
              <DialogContentText><b>Name:</b> {selectedMessage.name}</DialogContentText>
              <DialogContentText><b>Email:</b> {selectedMessage.email}</DialogContentText>
              <DialogContentText sx={{ mt: 2 }}>
                <b>Message:</b> {selectedMessage.message}
              </DialogContentText>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenViewDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this message? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
