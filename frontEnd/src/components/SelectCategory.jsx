import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const SelectCategory = ({ name, value, onChange }) => {
  return (
    <FormControl>
      <FormLabel>Category :</FormLabel>
      <Select name={name} value={value} onChange={onChange}>
        <option value="Food">Food</option>
        <option value="Service">Service</option>
        <option value="Transport">Transport</option>
        <option value="Hotel">Hotel</option>
      </Select>
    </FormControl>
  );
};

export default SelectCategory;
