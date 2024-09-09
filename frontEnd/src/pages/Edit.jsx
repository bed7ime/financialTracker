import React, { useEffect, useState } from "react";
import InputComponent from "../components/InputComponent";
import { Box, Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import SelectPaymentMethod from "../components/SelectPaymentMethod";
import SelectCategory from "../components/SelectCategory";
import { useNavigate, useParams } from "react-router-dom";
import FinancialService from "../services/financial.service";
import Swal from "sweetalert2";

const Edit = () => {
  const navigate = useNavigate();
  const userId = "u01";

  const { id } = useParams();

  useEffect(() => {
    FinancialService.getFinancialbyId(id).then((response) => {
      if (response.status === 200) {
        setFinancial(response.data);
      }
    });
  }, [id]);

  const [record, setRecord] = useState({
    userId: userId,
    description: "",
    date: "",
    amount: 0,
    category: "Food",
    paymentMethod: "PromptPay",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord(() => ({ ...record, [name]: value }));
  };

  const handleCancel = () => {
    setRecord({
      userId: userId,
      description: "",
      date: "",
      amount: 0,
      category: "Food",
      paymentMethod: "PromptPay",
    });
    navigate("/");
  };

  const handleSubmit = async () => {};
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
