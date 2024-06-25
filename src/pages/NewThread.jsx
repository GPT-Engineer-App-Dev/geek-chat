import { Box, Heading, Input, Textarea, Button, VStack } from "@chakra-ui/react";

const NewThread = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Create a New Thread</Heading>
      <VStack spacing={4} align="start">
        <Input placeholder="Thread Title" />
        <Textarea placeholder="Thread Content" />
        <Button colorScheme="teal">Submit</Button>
      </VStack>
    </Box>
  );
};

export default NewThread;