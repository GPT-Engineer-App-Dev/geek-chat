import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Tech Forum</Text>
        <Text>Discuss the latest in technology with fellow enthusiasts.</Text>
        <Button as={Link} to="/topics" colorScheme="teal" size="lg">View Topics</Button>
      </VStack>
    </Container>
  );
};

export default Index;