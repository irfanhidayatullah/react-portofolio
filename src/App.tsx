import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Jumbotron from "./components/Jumbotron";
import MyService from "./components/MyService";
import Navbar from "./components/Navbar";
// import WorkExperience from "./components/WorkExperience";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#ffffff",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Jumbotron />
      <MyService />
      {/* <WorkExperience /> */}
    </ChakraProvider>
  );
}

export default App;
