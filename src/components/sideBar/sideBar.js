import React from "react";
import "../../styles/sideBar.css";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useStore from "../../store/hooks/useStore";
const SideBar = () => {
  const ceoData = useStore((state) => state.ceoData);
  const teams = useStore((state) => state.teams);
  const departments = useStore((state) => state.departments);


  return (
    <aside className="sideBar">
      <Accordion
        expanded={true}
        sx={{
          bgcolor: "secondary.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            bgcolor: "secondary.main",
          }}
        >
          <Typography>CEO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {ceoData?.ceoDepartments?.map((department) => (
            <Accordion key={department.departmentCode}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  bgcolor: "secondary.dark",
                }}
              >
                <Typography>{department.departmentName}</Typography>
              </AccordionSummary>
              <AccordionSummary>
                {departments[department.departmentCode].teams.map(
                  (teamCode) => (
                    <Accordion
                    key={teamCode}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                          bgcolor: "secondary.light",
                          borderRadius: 2,
                          maxHeight: 10,
                        }}
                      >
                        <Typography>{teams[teamCode].teamName}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                              bgcolor: "#65e0d4",
                              borderRadius: 2,
                            }}
                          >
                            <Typography>{teams[teamCode].teamLead}</Typography>
                          </AccordionSummary>
                        </Accordion>
                      </AccordionDetails>
                    </Accordion>
                  )
                )}
              </AccordionSummary>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </aside>
  );
};

export { SideBar };
