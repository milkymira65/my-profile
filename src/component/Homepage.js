import { Box } from "@chakra-ui/react";
import Nav from "./Navbar";
import Profile from "./Profile";
import Education from "./Education";
function HomPage() {
  return (
    <Box>
      <Nav />
      <Profile />
      <Education />
    </Box>
  );
}

export default HomPage;
