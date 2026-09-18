import { useState, createContext } from "react";

export const jobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  return (
    <jobContext.Provider
      value={{
        jobs,
        setJobs,
        error,
        setError,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};