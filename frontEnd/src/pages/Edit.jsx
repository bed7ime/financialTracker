import React, { useEffect, useState } from "react";
import InputComponent from "../components/InputComponent";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
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

  const [financial, setFinancial] = useState({
    userId: userId,
    description: "",
    date: "",
    amount: 0,
    category: "Deposit",
    paymentMethod: "PromptPay",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFinancial(() => ({ ...financial, [name]: value }));
  };

  const handleCancel = () => {
    setFinancial({
      userId: userId,
      description: "",
      date: "",
      amount: 0,
      category: "Deposit",
      paymentMethod: "PromptPay",
    });
    navigate("/");
  };

  const handleSubmit = async () => {
    try {
      const response = await FinancialService.updateFinancial(id, financial);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Financial adding`,
          text: response.data.message || "Financial record added successfully.",
          timer: 1500,
        }).then(() => {
          setFinancial({
            userId: userId,
            description: "",
            date: "",
            amount: 0,
            category: "Deposit",
            paymentMethod: "PromptPay",
          });
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Financial adding`,
        text:
          error?.response?.data?.message || "Failed to add financial record!",
        timer: 1500,
      });
    }
  };
  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="75vh"
      justifyContent="center"
    >
      <Heading mb={5}>Edit Financial Record</Heading>
      <InputComponent
        type="text"
        label="Description :"
        placeholder="The description of your financial."
        name="description"
        value={financial.description}
        onChange={handleChange}
      />
      <InputComponent
        type="date"
        label="Date :"
        name="date"
        value={financial.date}
        onChange={handleChange}
      />
      <InputComponent
        type="number"
        label="Amount :"
        name="amount"
        value={financial.amount}
        onChange={handleChange}
      />
      <SelectCategory
        name="category"
        value={financial.category}
        onChange={handleChange}
      />
      <SelectPaymentMethod
        name="paymentMethod"
        value={financial.paymentMethod}
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
