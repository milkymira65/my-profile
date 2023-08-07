import { Box } from "@chakra-ui/react";
import Nav from "./Navbar";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Expeeriences";
function HomPage() {
  return (
    <Box>
      <Nav />
      <Profile />
      <Education />
      <Skills />
      <Experience />
    </Box>
  );
}

export default HomPage;
