import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/App.css";
import App from "./app/App.jsx";
import { AppProvider } from "../src/context/AuthContext.jsx";
import { JobProvider } from "./context/JobContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <JobProvider>
        <App />
      </JobProvider>
    </AppProvider>
  </StrictMode>,
);
