import { createContext, useContext, useEffect, useState } from "react";
import FinancialService from "../services/financial.service";
import { useUser } from "@clerk/clerk-react";
import Swal from "sweetalert2";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();
  const fetchRecords = async () => {
    if (!user) return;
    try {
      const response = FinancialService.getFinancialbyUserId(user.id);
      if (response.status === 200) {
        setRecords(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecord = async (record) => {
    try {
      const response = await FinancialService.addFinancial(record);
      if (response.status === 200) {
        setRecords((prev) => [...prev, response.data]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your financial has been added!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecord = async (id, newRecord) => {
    try {
      const response = await FinancialService.updateFinancial(id, newRecord);
      if (response.status === 200) {
        setRecords((prev) =>
          prev.map((record) => {
            if (record.id === id) {
              return newRecord;
            } else {
              return record;
            }
          })
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your financial has been updated!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (id) => {
    try {
      const response = await FinancialService.deleteFinancialbyId(id);
      if (response.status === 200) {
        setRecords((prev) => prev.filter((record) => record.id !== id));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your financial has been deleted!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FinancialRecordContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};

export const useFinancialRecords = () => useContext(FinancialRecordContext);
