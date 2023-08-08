import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import GridBlurredBackdrop from "../child-element/inside-skill";

export default function Skills() {
  return (
    <Flex justify="center" w="100vw" mt="3%" h="100vw">
      <Center>
        <Image
          mt="2%"
          w={[400, 600, 800, 1000, 1150]}
          src="picture/bgskill.png"
          shadow="xl"
          borderRadius="50px"
        />

        <Flex
          w={[700, 800, 1000]}
          h={[200, 300, 400, 500, 600]}
          shadow="xl"
          borderRadius="50px"
          position="absolute"
          top={[900, 1000, 2200, 2250, 2300, 2400, 2500]}
          bg="rgba(217, 220, 225, 0.4)"
        >
          <GridBlurredBackdrop />
        </Flex>

        <Flex
          w={[700, 800, 1000]}
          h={[200, 300, 400, 500, 600]}
          shadow="xl"
          borderRadius="50px"
          position="absolute"
          top={[2900, 3000, 3100]}
          bg="rgba(217, 220, 225, 0.4)"
        >
          <Box
            py={[5, 10]}
            ml="45%"
            fontSize={30}
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            color="#735F32"
          >
            Project
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
}
