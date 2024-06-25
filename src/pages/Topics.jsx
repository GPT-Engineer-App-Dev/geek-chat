import { useEffect, useState } from "react";
import { Box, Heading, List, ListItem, Link as ChakraLink } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get("/api/threads");
        setTopics(response.data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);
  return (
    <Box p={4}>
      <Heading mb={4}>Discussion Topics</Heading>
      <List spacing={3}>
        {topics.map((topic) => (
          <ListItem key={topic.id}>
            <ChakraLink as={Link} to={`/topics/${topic.id}`} color="teal.500">{topic.title}</ChakraLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Topics;