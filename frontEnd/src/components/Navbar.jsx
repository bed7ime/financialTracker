import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <Flex minWidth="max-content" alignItems="center" gap={2} shadow="lg" p={5}>
      <Box p={2}>
        <Heading
          as="button"
          onClick={handleHome}
          color="gray.600"
          fontSize="xx-large"
        >
          <Box as="span" color="orange.400">
            Financial
          </Box>{" "}
          Tracker
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        {" "}
        <Button color="orange.400" size="lg">
          Sign in
        </Button>
        <Button color="green.700" size="lg">
          Sign up
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
