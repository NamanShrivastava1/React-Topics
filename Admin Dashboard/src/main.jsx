import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App/App.css";
import App from "./App/App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ContextProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </StrictMode>,
);
