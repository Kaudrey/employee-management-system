import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // or use your auth context
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">Employee Dashboard</div>
      <div className="flex items-center gap-4">
        <Link to="/add" className="hover:underline">
          Add Employee
        </Link>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
          Logout
        </button>
      </div>
    </nav>
  );
}
