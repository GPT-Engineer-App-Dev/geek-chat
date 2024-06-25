import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Thread = () => {
  const { id } = useParams();
  const [thread, setThread] = useState(null);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const response = await axios.get(`/api/threads/${id}`);
        setThread(response.data);
      } catch (error) {
        console.error("Error fetching thread:", error);
      }
    };

    fetchThread();
  }, [id]);

  if (!thread) {
    return <Box p={4}>Loading...</Box>;
  }

  return (
    <Box p={4}>
      <Heading mb={4}>{thread.title}</Heading>
      <VStack spacing={4} align="start">
        {thread.posts.map((post, index) => (
          <Text key={index}>{post.content}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Thread;