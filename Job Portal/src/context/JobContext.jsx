// import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const jobContext = createContext();

export const JobProvider = ({ children }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [error, setError] = useState("");
  return (
    <jobContext.Provider
      value={{
        role,
        setRole,
        company,
        setCompany,
        contact,
        setContact,
        location,
        setLocation,
        skills,
        setSkills,
        error,
        setError,
      }}
    >
      {children}
    </jobContext.Provider>
  );
};
