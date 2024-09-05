import { Box, Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="90vh"
      justifyContent="center"
    >
      <SignedOut>
        <Heading textAlign="center">
          Welcome to your own{" "}
          <Box as="span" color="orange">
            Financial tracker
          </Box>
          .
        </Heading>
      </SignedOut>
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>
    </VStack>
  );
};

export default Home;
