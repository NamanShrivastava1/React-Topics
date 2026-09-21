import { useContext, useState } from "react";
import { jobContext } from "../context/JobContext";
import { useNavigate } from "react-router";
import { useMemo } from "react";

const Register = () => {
  const navigate = useNavigate();

  const { setJobs, error, setError } = useContext(jobContext);

  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [errorField, setErrorField] = useState("");

  const calculatedSalary = useMemo(() => {
    const baseSalary = Number(salary);
    const pf = (12 / 100) * salary;
    const bonus = (10 / 100) * salary;

    console.log("calculating......");

    return baseSalary + pf + bonus;
  }, [salary]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role.trim() === "") {
      setError("Role is required");
      setErrorField("role");
      return;
    }
    if (company.trim() === "") {
      setError("Company is required");
      setErrorField("company");
      return;
    }
    if (salary.trim() === "") {
      setError("Salary is required");
      setErrorField("salary");
      return;
    }
    if (contact.trim() === "") {
      setError("Contact is required");
      setErrorField("contact");
      return;
    }
    if (location.trim() === "") {
      setError("Location is required");
      setErrorField("location");
      return;
    }
    if (skills.trim() === "") {
      setError("Skills are required");
      setErrorField("skills");
      return;
    } else {
      const jobData = {
        role,
        company,
        calculatedSalary,
        contact,
        location,
        skills,
      };

      setJobs((prevJobs) => [...prevJobs, jobData]);

      console.log(role, company, calculatedSalary, contact, location, skills);
      navigate("/");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-gray-900 p-7 sm:p-9">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            BridgeFix Job Portal
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            List Job .
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Job Role
            <input
              type="text"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter Role"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "role" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Company
            <input
              type="text"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter Company Name"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "company" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Salary
            <input
              type="text"
              value={salary}
              onChange={(e) => {
                setSalary(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter Salary"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "salary" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Contact
            <input
              type="tel"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter contact number"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "contact" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Location
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter Location"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "location" && <p className="text-red-500">{error}</p>}

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Skills
            <input
              type="text"
              value={skills}
              onChange={(e) => {
                setSkills(e.target.value);

                setError("");
                setErrorField("");
              }}
              placeholder="Enter Skills"
              className="h-12 rounded-xl border border-slate-700 bg-slate-800 px-4 text-white outline-none placeholder:text-slate-500"
            />
          </label>
          {errorField === "skills" && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="mt-2 h-12 rounded-xl bg-red-500 font-semibold text-white hover:bg-red-400"
          >
            Create Job
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
