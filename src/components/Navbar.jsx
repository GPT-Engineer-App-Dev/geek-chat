import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <ChakraLink as={Link} to="/" color="white" fontWeight="bold">Home</ChakraLink>
        <ChakraLink as={Link} to="/topics" color="white" fontWeight="bold">Topics</ChakraLink>
        <ChakraLink as={Link} to="/new-thread" color="white" fontWeight="bold">New Thread</ChakraLink>
        <ChakraLink as={Link} to="/register" color="white" fontWeight="bold">Register</ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;