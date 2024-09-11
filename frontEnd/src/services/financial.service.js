import api from "./api";
const FINANCIAL_API = import.meta.env.VITE_FINANCIALS_API;

const getAllFinancial = async () => {
  return await api.get(FINANCIAL_API);
};

const getFinancialbyId = async (id) => {
  return await api.get(FINANCIAL_API + `/${id}`);
};

const getFinancialbyUserId = async (userId) => {
  return await api.get(FINANCIAL_API + `/users/${userId}`);
};

const addFinancial = async (record) => {
  return await api.post(FINANCIAL_API, record);
};

const updateFinancial = async (id, record) => {
  return await api.put(FINANCIAL_API + `/${id}`, record);
};

const deleteFinancialbyId = async (id) => {
  return await api.delete(FINANCIAL_API + `/${id}`);
};

const FinancialService = {
  getAllFinancial,
  getFinancialbyId,
  getFinancialbyUserId,
  addFinancial,
  updateFinancial,
  deleteFinancialbyId,
};

export default FinancialService;
