import axios from "axios";

const API = "http://localhost:5000"; // change this to your backend URL

const login = async (email: string, password: string): Promise<string> => {
  const { data } = await axios.post(`${API}/login`, { email, password });
  return data.token;
};

export default { login };
