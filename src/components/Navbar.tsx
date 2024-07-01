import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box
      bgColor="#171717"
      margin="auto"
      maxW="960px"
      borderRadius="25px"
      mt="25px"      
      
    >
      <Container maxW="7xl">
        <Flex justify="space-between" p="2" alignItems="center">
          <Text
            transitionDuration="500ms"
            px="4"
            py="2"
            color="#ffffff"
            fontWeight="Bold"
            _hover={{
              background: "#fd853a",
              color: "#171717",
              borderRadius: "25px",
            }}
            as="a"
            href="/"
          >
            Home
          </Text>
          <Text
            transitionDuration="500ms"
            px="4"
            py="2"
            color="#ffffff"
            fontWeight="Bold"
            _hover={{
              background: "#fd853a",
              color: "#171717",
              borderRadius: "25px",
            }}
            as="a"
            href="/"
            display={{ base: "none", md: "block" }}
          >
            About
          </Text>
          <Text
            transitionDuration="500ms"
            px="4"
            py="2"
            color="#ffffff"
            fontWeight="Bold"
            _hover={{
              background: "#fd853a",
              color: "#171717",
              borderRadius: "25px",
            }}
            as="a"
            href="/"
            display={{ base: "none", md: "block" }}
          >
            Service
          </Text>
          <Box width="75px">
            <Image src="/public/logo_portofolio.png" alt="Dan Abramov" />
          </Box>
          <Text
            transitionDuration="500ms"
            px="4"
            py="2"
            color="#ffffff"
            fontWeight="Bold"
            _hover={{
              background: "#fd853a",
              color: "#171717",
              borderRadius: "25px",
            }}
            as="a"
            href="/"
            display={{ base: "none", md: "block" }}
          >
            Resume
          </Text>
          <Text
            transitionDuration="500ms"
            px="4"
            py="2"
            color="#ffffff"
            fontWeight="Bold"
            _hover={{
              background: "#fd853a",
              color: "#171717",
              borderRadius: "25px",
            }}
            as="a"
            href="/"
            display={{ base: "none", md: "block" }}
          >
            Project
          </Text>
          <Text
            transitionDuration="500ms"
            px="4"
            py="2"
            color="#ffffff"
            fontWeight="Bold"
            _hover={{
              background: "#fd853a",
              color: "#171717",
              borderRadius: "50",
            }}
            as="a"
            href="/"
            display={{ base: "none", md: "block" }}
          >
            Contact
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
