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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FinancialService from "../services/financial.service";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const [financial, setFinancial] = useState([]);
  useEffect(() => {
    const getFinancial = async () => {
      try {
        const response = await FinancialService.getAllFinancial();
        if (response.status === 200) {
          const formatData = response.data.map((item) => ({
            ...item,
            date: new Date(item.date).toLocaleDateString(),
            createdAt: new Date(item.createdAt).toLocaleDateString(),
            updatedAt: new Date(item.updatedAt).toLocaleDateString(),
          }));
          setFinancial(formatData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFinancial();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await FinancialService.deleteFinancialbyId(id);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Financial delete`,
          text:
            response.data.message || "Financial record deleted successfully.",
          timer: 1500,
        }).then(() => {
          window.location.reload();
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

  const columns = [
    { key: "id" },
    { key: "userId" },
    { key: "description" },
    { key: "date" },
    { key: "amount" },
    { key: "category" },
    { key: "paymentMethod" },
  ];

  console.log(financial);

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 1500 }}
      h="50vh"
      justifyContent="center"
    >
      <TableContainer>
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
            {financial.length > 0 ? (
              financial.map((item) => (
                <Tr key={item.id}>
                  {columns.map((col) => (
                    <Td key={col.key}>{item[col.key] || "N/A"}</Td>
                  ))}
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
              ))
            ) : (
              <Tr>
                <Td colSpan={columns.length + 1}>
                  No financial record to show!
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default Home;
