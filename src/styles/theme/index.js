import { createTheme} from "@mui/material/styles";

export const Mytheme = createTheme({
  palette: {
    primary: {
      main: "#6fffe9",
    },
    secondary: {
      main: '#1c2541',
      light:"#508991",
      dark:"#3a506b"
    },
    background: {
      paper: "#171726",
    },
    text: {
      primary: "#ffff",
      disabled: "rgba(92,91,91,0.38)",
      secondary: "rgba(243,238,238,0.54)",
      hint: "rgba(0,0,0,0.38)",
      accent:"#6fffe9",
    },
    typography: {
      myVariant: {
        fontSize: "1rem",
      },
      myVariant2: {
        fontSize: "1.5rem",
      },
      myVariant3: {
        fontSize: "2rem",
      },
    },
  },

 
});

