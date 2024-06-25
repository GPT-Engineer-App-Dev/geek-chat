import { useState } from "react";
import { Box, Heading, Input, Textarea, Button, VStack, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewThread = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!content) errors.content = "Content is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post("/api/threads", { title, content });
        console.log("Thread creation successful:", response.data);
        navigate(`/topics/${response.data.id}`);
      } catch (error) {
        console.error("Thread creation error:", error);
        setErrors({ submit: "Thread creation failed. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Create a New Thread</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl isInvalid={errors.title}>
            <FormLabel>Thread Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.content}>
            <FormLabel>Thread Content</FormLabel>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
            <FormErrorMessage>{errors.content}</FormErrorMessage>
          </FormControl>
          {errors.submit && <Box color="red.500">{errors.submit}</Box>}
          <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>Submit</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default NewThread;