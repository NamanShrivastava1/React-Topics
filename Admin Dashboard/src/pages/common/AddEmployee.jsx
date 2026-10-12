import { useState } from "react";
import {
  UserPlus,
  User,
  Building2,
  IndianRupee,
  BriefcaseBusiness,
  Mail,
  Phone,
  CalendarDays,
} from "lucide-react";
import InputBox from "../../components/Common/InputBox";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    joiningDate: "",
    designation: "",
    salary: "",
    experience: "",
  });

  const handleInputChange = (event) => {
    const { name } = event.target;
    const value =
      name === "phone" ? event.target.value.slice(0, 10) : event.target.value;
    setEmployee((currentEmployee) => ({
      ...currentEmployee,
      [name]: value,
    }));
  };

  const labelStyle = "mb-2 block text-sm font-semibold text-white";

  return (
    <div className="min-h-screen bg-stone-300 p-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-4"></div>

        <form className="rounded-2xl border border-stone-500 bg-stone-600 p-5 shadow-lg">
          <div className="mb-7 border-b border-stone-500 pb-5">
            <h2 className="text-lg font-bold text-white">
              Employee Information
            </h2>
            <p className="mt-1 text-sm text-stone-200">
              Fields marked with * are required.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-white">
              <User size={18} />
              Personal Details
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>Full Name *</label>
                <InputBox
                  type="text"
                  name="name"
                  value={employee.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className={labelStyle}>Email Address *</label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3.5 text-stone-300"
                    size={17}
                  />
                  <InputBox
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleInputChange}
                    placeholder="employee@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Phone Number *</label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-3.5 text-stone-300"
                    size={17}
                  />
                  <InputBox
                    type="tel"
                    name="phone"
                    value={employee.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Joining Date *</label>
                <div className="relative">
                  <CalendarDays
                    className="absolute left-3 top-3.5 text-stone-300"
                    size={17}
                  />
                  <InputBox
                    type="date"
                    name="joiningDate"
                    value={employee.joiningDate}
                    onChange={handleInputChange}
                    className="w-105 bg-stone-500 text-white px-30 py-3 rounded-lg outline-none focus:border focus:border-stone-400 transition placeholder:text-stone-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-5 flex items-center gap-2 font-semibold text-white">
              <BriefcaseBusiness size={18} />
              Job Details
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className={labelStyle}>Department *</label>
                <div className="relative">
                  <Building2
                    className="absolute left-3 top-3.5 text-stone-300"
                    size={17}
                  />
                  <select
                    className="w-105 bg-stone-500 text-white px-30 py-3 rounded-lg outline-none focus:border focus:border-stone-400 transition placeholder:text-stone-200"
                    name="department"
                    required
                  >
                    <option value="">Select department</option>
                    <option>Development</option>
                    <option>Human Resources</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelStyle}>Designation *</label>
                <InputBox
                  type="text"
                  name="designation"
                  value={employee.designation}
                  onChange={handleInputChange}
                  placeholder="e.g. Software Developer"
                />
              </div>

              <div>
                <label className={labelStyle}>Monthly Salary (₹) *</label>
                <div className="relative">
                  <IndianRupee
                    className="absolute left-3 top-3.5 text-stone-300"
                    size={17}
                  />
                  <InputBox
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={handleInputChange}
                    placeholder="Enter monthly salary"
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Experience (Years) *</label>
                <InputBox
                  type="number"
                  name="experience"
                  value={employee.experience}
                  onChange={handleInputChange}
                  placeholder="e.g. 2"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-stone-500 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="rounded-xl border border-stone-300 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-500"
            >
              Reset Form
            </button>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-stone-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-900 active:scale-[0.98]"
            >
              <UserPlus size={18} />
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
