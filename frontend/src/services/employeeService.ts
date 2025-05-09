import axios from "axios";
import { Employee } from "../types";

const API = "http://localhost:5050";

const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

const getEmployees = async (page = 1): Promise<Employee[]> => {
  const res = await axios.get(`${API}/employees?page=${page}`, config());
  return res.data;
};

const addEmployee = async (data: Partial<Employee>) => {
  return await axios.post(`${API}/employees`, data, config());
};

export default { getEmployees, addEmployee };
