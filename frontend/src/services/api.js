import axios from "axios";

// FIXED: Points to port 5001 and uses the /api/atm prefix your backend expects!
const API = axios.create({
  baseURL: "https://atm-application-s4yi.onrender.com/api/atm"
});

export const signup = (formData) => {
  return API.post("/signup", formData);
};

export const login = (accountNumber, pin) => {
  return API.post("/login", { accountNumber, pin });
};

export const getBalance = async (accountNumber) => {
  return API.get(`/balance/${accountNumber}`);
};

export const deposit = async (accountNumber, amount) => {
  return API.put("/deposit", { accountNumber, amount });
};

export const withdraw = async (accountNumber, amount) => {
  return API.put("/withdraw", { accountNumber, amount });
};