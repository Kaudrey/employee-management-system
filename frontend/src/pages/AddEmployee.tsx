import { useState } from "react";
import { Employee } from "../types";
import employeeService from "../services/addEmployeeService";
import { useNavigate } from "react-router-dom";

const initialForm: Partial<Employee> = {
  firstname: "",
  lastname: "",
  nationalId: "",
  telephone: "",
  email: "",
  department: "",
  position: "",
  manufacturer: "",
  model: "",
  serialNumber: "",
};

export default function AddEmployee() {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await employeeService.addEmployee(form);
    navigate("/employees");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-10 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.entries(initialForm).map(([key], i) => (
          <input
            key={i}
            type="text"
            name={key}
            value={form[key as keyof Employee] || ""}
            onChange={handleChange}
            placeholder={key.replace(/_/g, " ")}
            className="border p-2 rounded"
          />
        ))}
        <button type="submit" className="col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Save</button>
      </form>
    </div>
  );
}
