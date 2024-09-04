import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const SelectPaymentMethod = ({ name, value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Payment Method :</FormLabel>
      <Select name={name} value={value} onChange={onChange}>
        <option value="PromptPay">PromptPay</option>
        <option value="Credit cards">Credit cards</option>
        <option value="Debit cards">Debit cards</option>
        <option value="Mobile banking">Mobile banking</option>
      </Select>
    </FormControl>
  );
};

export default SelectPaymentMethod;
