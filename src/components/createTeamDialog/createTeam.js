import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useStore from "../../store/hooks/useStore";

const CreateTeamDialog = () => {
  const isTeamModalOpen = useStore((state) => state.isTeamModalOpen);
  const setIsTeamModal = useStore((state) => state.setIsTeamModal);
  const modalType = useStore((state) => state.modalType);

  const handleClose = () => {
    setIsTeamModal(false);
  };

  return (
    <div>
      <Dialog open={isTeamModalOpen} onClose={handleClose}>
        <DialogTitle>
          {modalType === "edit" ? "Edit Details" : "Add New Team"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Team details.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Team Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Team Lead"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button>{modalType === "edit" ? "Update" : "Create"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export { CreateTeamDialog };
