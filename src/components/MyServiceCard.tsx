import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

interface MyServiceCardA {
  title: string;
  description: string;
  image: string;
}

function MyServiceCard({ title, description, image }: MyServiceCardA) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      h="100%"
      borderRadius="50px"
    >
      <Stack>
        <CardBody alignItems="center" justifyItems="center">
          <Heading size="md">{title}</Heading>

          <Box display="flex" justifyContent="center">
            <Image
              objectFit="contain"
              justifyItems="center"
              maxW={{ base: "100%", sm: "200px" }}
              src={image}
              alt="Image Content"
            />
          </Box>

          <Text py="2">{description}</Text>

          <Button variant="solid" colorScheme="blue">
            Order Now!
          </Button>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MyServiceCard;
