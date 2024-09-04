import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const InputComponent = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default InputComponent;
