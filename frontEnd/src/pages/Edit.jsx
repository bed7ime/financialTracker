import React, { useEffect, useState } from "react";
import InputComponent from "../components/InputComponent";
import { Box, Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import SelectPaymentMethod from "../components/SelectPaymentMethod";
import SelectCategory from "../components/SelectCategory";
import { useNavigate, useParams } from "react-router-dom";
import { useFinancialRecords } from "../contexts/financial.context";

const Edit = () => {
  const { records, updateRecord } = useFinancialRecords();
  const [record, setRecord] = useState({
    description: "",
    date: "",
    amount: 0,
    category: "Food",
    paymentMethod: "PromptPay",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const recordId = Number(id);
    const record = records.find((record) => record.id === recordId);
    if (record) {
      const formattedDate = new Date(record.date).toISOString().split("T")[0];
      setRecord({ ...record, date: formattedDate });
    }
  }, [id, records]);

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRecord(id, record);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setRecord({
      userId: "",
      description: "",
      date: "",
      amount: 0,
      category: "Food",
      paymentMethod: "PromptPay",
    });
    navigate("/");
  };

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="75vh"
      justifyContent="center"
    >
      <Heading mb={5}>
        <Box as="span" color="orange">
          Edit
        </Box>{" "}
        Financial Record
      </Heading>
      <InputComponent
        type="text"
        label="Description :"
        placeholder="The description of your financial."
        name="description"
        value={record.description}
        onChange={handleChange}
      />
      <InputComponent
        type="date"
        label="Date :"
        name="date"
        value={record.date}
        onChange={handleChange}
      />
      <InputComponent
        type="number"
        label="Amount :"
        name="amount"
        value={record.amount}
        onChange={handleChange}
      />
      <SelectCategory
        name="category"
        value={record.category}
        onChange={handleChange}
      />
      <SelectPaymentMethod
        name="paymentMethod"
        value={record.paymentMethod}
        onChange={handleChange}
      />
      <ButtonGroup gap={4} mt={4}>
        {" "}
        <Button colorScheme="red" onClick={handleCancel}>
          Cancel
        </Button>
        <Button colorScheme="orange" onClick={handleSubmit}>
          Edit a record
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Edit;
