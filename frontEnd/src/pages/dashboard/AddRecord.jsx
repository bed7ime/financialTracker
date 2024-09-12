import { Box, Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import InputComponent from "../../components/InputComponent";
import SelectCategory from "../../components/SelectCategory";
import SelectPaymentMethod from "../../components/SelectPaymentMethod";
import { useFinancialRecords } from "../../contexts/financial.context";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const AddRecord = () => {
  const { user } = useUser();

  const [record, setRecord] = useState({
    userId: "",
    description: "",
    date: "",
    amount: 0,
    category: "Food",
    paymentMethod: "PromptPay",
  });
  const { addRecord } = useFinancialRecords();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord(() => ({ ...record, [name]: value, userId: user.id }));
  };

  const handleSubmit = async () => {
    try {
      addRecord(record);
      setRecord({
        userId: "",
        description: "",
        date: "",
        amount: 0,
        category: "Food",
        paymentMethod: "PromptPay",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClear = () => {
    setRecord({
      userId: "",
      description: "",
      date: "",
      amount: 0,
      category: "Food",
      paymentMethod: "PromptPay",
    });
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
        <Box as="span" color="gray.600">
          Add
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
        <Button colorScheme="red" onClick={handleClear}>
          Clear
        </Button>
        <Button colorScheme="green" onClick={handleSubmit}>
          Add a record
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default AddRecord;
