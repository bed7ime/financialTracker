import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
  ButtonGroup,
  Button,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useFinancialRecords } from "../../contexts/financial.context";
import { useUser } from "@clerk/clerk-react";
import AddRecord from "./AddRecord";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {};

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 2000 }}
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
          <Text mb={2}>Welcome, {user?.firstName}</Text>
          <AddRecord />
        </Box>
        <Box>
          <TableContainer overflow="auto">
            <Table>
              <TableCaption>Financial Records</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>User Id</Th>
                  <Th>Description</Th>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Category</Th>
                  <Th>Payment Method</Th>
                  <Th>Operations</Th>
                </Tr>
              </Thead>
              <Tbody>
                {records &&
                  records.map((record) => (
                    <Tr key={record.id}>
                      {" "}
                      <Td>{record.id}</Td>
                      <Td>{record.userId}</Td>
                      <Td>{record.description}</Td>
                      <Td>{record.date}</Td>
                      <Td>{record.amount}</Td>
                      <Td>{record.category}</Td>
                      <Td>{record.paymentMethod}</Td>
                      <Td>
                        <ButtonGroup>
                          <Button
                            onClick={() => handleEdit(item.id)}
                            colorScheme="orange"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDelete(item.id)}
                            colorScheme="red"
                          >
                            Delete
                          </Button>
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
              <Tfoot />
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Dashboard;
