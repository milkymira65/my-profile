import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";

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
      </Center>
    </Flex>
  );
}
