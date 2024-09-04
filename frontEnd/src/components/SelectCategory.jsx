import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const SelectCategory = ({ name, value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Category :</FormLabel>
      <Select name={name} value={value} onChange={onChange}>
        <option value="Deposit">Deposit</option>
        <option value="Withdraw">Withdraw</option>
        <option value="Transfer">Transfer</option>
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
