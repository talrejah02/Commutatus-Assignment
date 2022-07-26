import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStore from "../../store/hooks/useStore";

const MemberCard = (props) => {
  const { employe } = props;
  const setIsModal = useStore((state) => state.setIsModal);
  const setCurrentMember = useStore((state) => state.setCurrentMember);
  const setModalType = useStore((state) => state.setModalType);
  const deleteMember = useStore((state) => state.deleteMember);

  const editMember = () => {
    setIsModal(true);
    setModalType("edit");
    setCurrentMember(employe);
  };

  const DeleteMember = () => {
    setCurrentMember(employe);
    deleteMember(employe.ID);
  };

  return (
    <Card sx={{ maxWidth: 300, height: 150 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employe.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Member position
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => editMember()}>
          Edit
        </Button>
        <Button size="small">Move</Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => DeleteMember()}
        >
          <DeleteOutlineIcon
            sx={{
              color: "primary.main",
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export { MemberCard };
