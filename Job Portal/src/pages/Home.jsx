import { useContext } from "react";
import Navbar from "../components/Navbar";
import { jobContext } from "../context/JobContext.jsx";

const Home = () => {
  const { jobs } = useContext(jobContext);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Job opportunities
          </p>
          <h1 className="text-3xl font-bold text-white">Available jobs</h1>
        </div>

        {jobs.length === 0 ? (
          <div className="text-center text-slate-400">
            No jobs available yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-900 p-6"
              >
                <div className="mb-5 border-b border-slate-800 pb-5">
                  <h2 className="text-xl font-bold text-white">{job.company}</h2>
                  <p className="mt-1 text-slate-400">Role: {job.role}</p>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-slate-500">Salary</p>
                    <p className="mt-1 text-slate-200">{job.calculatedSalary}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-500">Location</p>
                    <p className="mt-1 text-slate-200">{job.location}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-500">Contact</p>
                    <p className="mt-1 text-slate-200">{job.contact}</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-500">Skills</p>
                    <p className="mt-1 leading-6 text-slate-200">
                      {job.skills}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
