import React, { useEffect } from "react";
import { MemberCard } from "../index";
import "../../styles/cardListing.css";
import useStore from "../../store/hooks/useStore";
import { Button } from "@mui/material";

function CardListing() {
  const members = useStore((state) => state.members);
  const setModalType = useStore((state) => state.setModalType);
  const setIsModal = useStore((state) => state.setIsModal);
  const currentTeam = useStore((state) => state.currentTeam);
  const teamMembers = useStore((state) => state.currentTeam);
  useEffect(() => {}, []);
  const addMember = () => {
    setModalType("new");
    setIsModal(true);
  };
  return (
    <div className="cardListing">
      {members?.map((employe) => (
        <MemberCard employe={employe} />
      ))}
      {currentTeam !== "CEO" && (
        <Button
          variant="contained"
          sx={{ height: "8%" }}
          onClick={() => addMember()}
        >
          ADD TEAM MEMBER
        </Button>
      )}
    </div>
  );
}

export { CardListing };
