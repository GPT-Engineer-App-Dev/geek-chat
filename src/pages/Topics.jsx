import { Box, Heading, List, ListItem, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Discussion Topics</Heading>
      <List spacing={3}>
        <ListItem>
          <ChakraLink as={Link} to="/topics/1" color="teal.500">Topic 1</ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink as={Link} to="/topics/2" color="teal.500">Topic 2</ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink as={Link} to="/topics/3" color="teal.500">Topic 3</ChakraLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Topics;