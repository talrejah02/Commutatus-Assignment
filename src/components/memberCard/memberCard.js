import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useStore  from "../../store/hooks/useStore";


const MemberCard=()=>{
  const setIsModal = useStore((state)=>state.setIsModal)

  return (
    <Card sx={{ maxWidth: 300,
      height:150
    }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Member Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Member position
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>setIsModal(true)}>Edit</Button>
        <Button size="small">Move</Button>
      </CardActions>
    </Card>
  );
}
export {MemberCard}
