import { useState } from "react";
import { Box, Heading, Input, Button, VStack, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = {};
    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post("/api/register", { username, email, password });
        console.log("Registration successful:", response.data);
        // Redirect to login or home page
      } catch (error) {
        console.error("Registration error:", error);
        setErrors({ submit: "Registration failed. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="start">
          <FormControl isInvalid={errors.username}>
            <FormLabel>Username</FormLabel>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            <FormErrorMessage>{errors.username}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.confirmPassword}>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
          </FormControl>
          {errors.submit && <Box color="red.500">{errors.submit}</Box>}
          <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>Register</Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;