import axios from "axios";
import { Employee } from "../types";

const API = "http://localhost:5050/api/v1/employees";

const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});



const addEmployee = async (data: Partial<Employee>) => {
  return await axios.post(`${API}/addEmployee`, data, config());
};

export default {addEmployee };
