import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await authService.login(email, password);
    login(token);
    navigate("/employees");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700 px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex w-full max-w-4xl">
        {/* Left Section */}
        <div className="w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 flex flex-col justify-center relative">
          <h2 className="text-3xl font-bold mb-4">WELCOME</h2>
          <p className="text-lg mb-2">YOUR HEADLINE NAME</p>
          <p className="text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate et esse
            nesciunt tenetur, aut maiores voluptates.
          </p>

          {/* Floating circles */}
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-800 rounded-full opacity-30"></div>
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500 rounded-full opacity-30"></div>
        </div>

        {/* Right Section - Login Form */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 p-10 bg-white flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <span className="px-3 text-gray-500">
                {FaIcons.FaUser({})}
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 py-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <span className="px-3 text-gray-500">
                {FaIcons.FaLock({})}
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-2 py-2 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-between text-sm mb-6 text-gray-600">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold shadow"
          >
            Sign In
          </button>

          <button
            type="button"
            className="mt-3 border border-gray-300 py-2 rounded-md font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            Sign in with other
          </button>

          <p className="text-center text-xs text-gray-500 mt-6">
            Don’t have an account? <span className="text-blue-600 font-medium">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
