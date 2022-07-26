import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useStore from "../../store/hooks/useStore";
import { v4 as uuidv4 } from "uuid";

const CreateMemberDialog = () => {
  const isModalOpen = useStore((state) => state.isModalOpen);
  const setIsModal = useStore((state) => state.setIsModal);
  const modalType = useStore((state) => state.modalType);
  const createNewMember = useStore((state) => state.createNewMember);
  const currentMember = useStore((state) => state.currentMember);
  const UpdateMember = useStore((state) => state.UpdateMember);
  const [employe, setEmploye] = useState({
    ID: "",
    Name: "",
    Phone: "",
    EmailID: "",
  });

  const handleClose = () => {
    setIsModal(false);
  };
  const createUpdateMember = () => {
    if (modalType === "edit") {
      UpdateMember(employe);
      handleClose();
    } else {
      createNewMember({
        ID: uuidv4(),
        Name: employe.Name,
        Phone: employe.Phone,
        EmailID: employe.EmailID,
      });
      handleClose();
    }
  };
  useEffect(() => {
    if (modalType === "edit") {
      setEmploye({
        ID: currentMember.ID,
        Name: currentMember.Name,
        Phone: currentMember.Phone,
        EmailID: currentMember.EmailID,
      });
    }
  }, [currentMember, modalType]);

  return (
    <div>
      <Dialog open={isModalOpen} onClose={handleClose}>
        <DialogTitle>
          {modalType === "edit" ? "Edit Details" : "Add New Team Member"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Employee details.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={employe.Name}
            onChange={(e) => setEmploye({ ...employe, Name: e.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={employe.EmailID}
            onChange={(e) =>
              setEmploye({ ...employe, EmailID: e.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            value={employe.Phone}
            onChange={(e) => setEmploye({ ...employe, Phone: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => createUpdateMember()}>
            {modalType === "edit" ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export { CreateMemberDialog };
