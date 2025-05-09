import { useEffect, useState } from "react";
import { Employee } from "../types";
import employeeService from "../services/employeeService";
import Navbar from "../components/Navbar";

export default function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await employeeService.getEmployees(page);
      setEmployees(data);
    };
    fetchEmployees();
  }, [page]);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl mb-4 font-bold">Employee List</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th>Name</th><th>Email</th><th>Dept</th><th>Laptop</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="text-center border-t">
                <td>{emp.firstname} {emp.lastname}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.manufacturer} {emp.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="btn">Previous</button>
          <span>Page {page}</span>
          <button onClick={() => setPage((p) => p + 1)} className="btn">Next</button>
        </div>
      </div>
    </>
  );
}
