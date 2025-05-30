import axios from "axios";
import { Employee } from "../types";

const API = "http://localhost:5050/api/v1/employees";

const config = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

const getEmployees = async (page = 1): Promise<Employee[]> => {
  const res = await axios.get(`${API}/getEmployees?page=${page}`, config());
  return res.data.data;
};


export default { getEmployees };
