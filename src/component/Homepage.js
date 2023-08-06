import { Box } from "@chakra-ui/react";
import Nav from "./Navbar";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";

function HomPage() {
  return (
    <Box>
      <Nav />
      <Profile />
      <Education />
      <Skills />
    </Box>
  );
}

export default HomPage;
