// import myImage from "../img/myImage.jpg";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { EducationInsite } from "../child-element/pigture-inedducation";

function Education() {
  return (
    <Flex justify="center" w="100vw" mt="3%">
      <Flex
        w={[700, 800, 1000]}
        h={[200, 300, 400, 500, 600]}
        shadow="xl"
        borderRadius="50px"
        position="absolute"
        top={[1000, 1200, 1300]}
        bg="rgba(217, 220, 225, 0.4)"
      >
        <EducationInsite />
      </Flex>
    </Flex>
  );
}

export default Education;
