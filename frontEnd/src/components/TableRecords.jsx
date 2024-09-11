import React from "react";
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
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useFinancialRecords } from "../contexts/financial.context";
import { useNavigate } from "react-router-dom";

const TableRecords = () => {
  const navigate = useNavigate();
  const { records, deleteRecord } = useFinancialRecords();

  const handleEdit = (record) => {
    navigate(`/edit/${record.id}`);
  };

  const handleDelete = (record) => {
    deleteRecord(record.id);
  };

  const ADate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <TableContainer overflow="auto" maxWidth="800px">
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
                <Td>{ADate(record.date)}</Td>
                <Td>{record.amount}</Td>
                <Td>{record.category}</Td>
                <Td>{record.paymentMethod}</Td>
                <Td>
                  <ButtonGroup>
                    <Button
                      onClick={() => handleEdit(record)}
                      colorScheme="orange"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(record)}
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
  );
};

export default TableRecords;
