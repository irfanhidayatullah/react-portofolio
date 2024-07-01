import { Box, Grid, GridItem } from "@chakra-ui/react";
import MyServiceCard from "./MyServiceCard";

function MyService() {
  return (
    <Box
      bgColor="#171717"
      w="100%"
      borderRadius="50px"
      position="relative"
      p={8}
      bottom="50px"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" data-aos="zoom-in">
          <MyServiceCard
            title="Front-End Developer"
            description="The development of code that creates the visual front-end elements of a
software, application or website. Front end languages include HTML, CSS, and Javascript"
            image="/Front-End Developer Logo_MyService.svg"
          />
        </GridItem>
        <GridItem w="100%" data-aos="zoom-in">
          <MyServiceCard
            title="Back-End Developer"
            description="Back end developers ensure the website performs correctly, focusing on databases,
back end logic, application programming interface (APIs), architecture, and servers."
            image="/Back-End Developer Logo_MyService.svg"
          />
        </GridItem>
        <GridItem w="100%" data-aos="zoom-in" >
          <MyServiceCard
            title="Full Stack Developer"
            description="Helps build and maintain both the front-end and the back-end of a website."
            image="/Full Stack Developer_Logo.svg"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MyService;
