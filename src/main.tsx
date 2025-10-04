import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import './index.css'
import App from './App.tsx'


import "@fontsource/volkhov/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/outfit/400.css"; 
import "@fontsource/poppins/400.css";
import "@fontsource/archivo/400.css";
import "@fontsource/roboto/400.css"; 

const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "Outfit",
      "Archivo",
      "Inter",
      "Poppins",
      "Volkhov",
      "sans-serif",
    ].join(","),
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
