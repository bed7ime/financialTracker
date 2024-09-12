import { VStack, Text, Box, Flex } from "@chakra-ui/react";
import { useFinancialRecords } from "../../contexts/financial.context";
import { useUser } from "@clerk/clerk-react";
import AddRecord from "./AddRecord";
import { useMemo } from "react";
import TableRecords from "./TableRecords";

const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalAmount = useMemo(() => {
    let total = 0;
    records.forEach((record) => {
      const amount = parseFloat(record.amount);
      total += amount;
    });
    return total;
  }, [records]);

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="90vh"
      justifyContent="center"
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap={5}
        shadow="lg"
        p={10}
        rounded={10}
      >
        <Box>
          <AddRecord />
        </Box>
        <Box textAlign="center">
          <Text fontSize="large" mb={6}>
            Welcome,{" "}
            <Box as="span" color="orange">
              {user?.firstName}
            </Box>{" "}
            : Total amount :{" "}
            <Box as="span" color="green">
              {totalAmount}
            </Box>
            ฿
          </Text>
          <TableRecords />
        </Box>
      </Flex>
    </VStack>
  );
};

export default Dashboard;
