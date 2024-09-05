import api from "./api";
const FINANCIAL_API = import.meta.env.VITE_FINANCIALS_API;

const getAllFinancial = async () => {
  return await api.get(FINANCIAL_API);
};

const getFinancialbyId = async (id) => {
  return await api.get(FINANCIAL_API + `/${id}`);
};

const getFinancialbyUserId = async (userId) => {
  return await api.get(FINANCIAL_API + `/user/${userId}`);
};

const addFinancial = async (financial) => {
  return await api.post(FINANCIAL_API, financial);
};

const updateFinancial = async (id, financial) => {
  return await api.put(FINANCIAL_API + `/${id}`, financial);
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
