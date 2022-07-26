import "./App.css";
import {
  CardListing,
  CreateMemberDialog,
  SideBar,
  CreateTeamDialog,
} from "./components";
import useStore from "./store/hooks/useStore";
import { useEffect } from "react";

function App() {
  const isModalOpen = useStore((state) => state.isModalOpen);
  const isTeamModalOpen = useStore((state) => state.isTeamModalOpen);
  const teams = useStore((state) => state.teams);
  const ceoData = useStore((state) => state.ceoData);
  const departments = useStore((state) => state.departments);
  const teamMembers = useStore((state) => state.teamMembers);

  useEffect(() => {
    let getTeams = JSON.parse(localStorage.getItem("teams"));
    let getDepartments = JSON.parse(localStorage.getItem("departments"));
    let getCeoData = JSON.parse(localStorage.getItem("ceoData"));
    let getTeamMembers = JSON.parse(localStorage.getItem("teamMembers"));

    if (!getTeams && !getCeoData && !getDepartments && !getTeamMembers) {
      localStorage.setItem("ceoData", JSON.stringify(ceoData));
      localStorage.setItem("departments", JSON.stringify(departments));
      localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
      localStorage.setItem("teams", JSON.stringify(teams));
    }
  });

  return (
    <div className="App">
      <SideBar />
      <CardListing />
      {isModalOpen && <CreateMemberDialog />}
      {isTeamModalOpen && <CreateTeamDialog />}
    </div>
  );
}

export default App;
