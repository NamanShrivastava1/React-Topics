import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App/App.css";
import App from "./App/App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ContextProvider } from "./context/Context.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
