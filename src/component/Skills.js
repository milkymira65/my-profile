import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import GridBlurredBackdrop from "../child-element/inside-skill";

export default function Skills() {
  return (
    <Flex justify="center" w="100vw" mt="3%" h="100vw">
      <Center>
        <Image
          mt={[150, 200, 300]}
          w={[400, 600, 800, 1000, 1100]}
          src="picture/bgskill.png"
          shadow="xl"
          borderRadius="50px"
        />
        <Flex
          w="80%"
          h={[400, 500]}
          shadow="xl"
          borderRadius="50px"
          position="absolute"
          top={[1000, 1500, 1800, 2250, 2300]}
          bg="rgba(217, 220, 225, 0.7)"
        >
          <GridBlurredBackdrop />
        </Flex>

        <Flex
          w="80%"
          h={[400, 500]}
          shadow="xl"
          borderRadius="50px"
          position="absolute"
          top={[2200, 2800, 2900]}
          bg="rgba(217, 220, 225, 0.7)"
        >
          <Box
            // py={[5, 10, 20]}
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
