import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

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
        <SignedOut>
          {" "}
          <Button
            color="orange.400"
            size="lg"
            colorScheme="orange"
            variant="ghost"
          >
            <SignInButton mode="modal" />
          </Button>
          <Button
            color="green.700"
            size="lg"
            variant="outline"
            colorScheme="green"
          >
            <SignUpButton mode="modal" />{" "}
          </Button>{" "}
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
