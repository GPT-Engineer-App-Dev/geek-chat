import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Thread = ({ threadId }) => {
  return (
    <Box p={4}>
      <Heading mb={4}>Thread {threadId}</Heading>
      <VStack spacing={4} align="start">
        <Text>User1: This is a comment.</Text>
        <Text>User2: This is another comment.</Text>
      </VStack>
    </Box>
  );
};

export default Thread;