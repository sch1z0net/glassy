import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';
import {alpha} from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    input: {
      main: alpha('#F1F1F1', 0.9),
    },
    body: {
      main: alpha('#010101', 1),
    },
    div: {
      main: alpha('#F0F0F0', 0.8),
      border: alpha('#F0F0F0', 1.0),
    }
  },
});

export default theme;
