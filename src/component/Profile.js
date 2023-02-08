import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex justify="center" w="100vw" mt="5%">
      <Center>
        <Image src="picture/bgprofile.png" shadow="xl" borderRadius="50px" />
      </Center>
      <Flex w="30%" position="absolute">
        <Image src="picture/milklogo.png" position="relative" />
        {/* <Text
          className="milk"
          position="absolute"
          top="45%"
          left="35%"
          bottom="80%"
          fontSize={[10, 20, 50]}
          fontWeight="extrabold"
          color="#735F32"
        >
          MILKY
        </Text> */}
      </Flex>

      <Flex
        w="60%"
        h="30%"
        shadow="xl"
        borderRadius="50px"
        direction="row"
        position="absolute"
        top="32%"
        bg="rgba(217, 220, 225, 0.4)"
      >
        <Box w="40%" ml="5%" mt="10%">
          <Image borderRadius="50px" src="picture/profile.png" />
        </Box>
        <Box w="40%" mt="5%" ml="8%">
          <Flex>
            <Image src="picture/ornlogo.png" />
          </Flex>
          <Text
            ml="5%"
            className="profile"
            fontSize={[10, 15, 25]}
            fontWeight="extrabold"
            color="#735F32"
          >
            Software Developer
          </Text>
          <Text className="profile" fontSize={[5, 10, 15]}>
            I appreciate how challenging modern computer programming can be and
            I am pleased to be able to provide a number of unique skills to any
            employer. Notwithstanding, I am enthusiastic to take on new and
            challenging tasks;this is the only way to gain further
            knowledge.while my educational experience speaks for itself. I also
            enjoy pursuing the latest topics and obtaining degrees as they
            continue to evolve. Ultimately, I hope to come across a firm which
            allows me to illustrate my talents within an environment that
            promotes teamwork and professional growth.
          </Text>
        </Box>
      </Flex>

      <Flex
        w="60%"
        h="30%"
        shadow="xl"
        borderRadius="50px"
        direction="row"
        position="absolute"
        top="65%"
        bg="rgba(217, 220, 225, 0.4)"
      >
        <Text
          ml="45%"
          mt="2%"
          className="profile"
          fontSize={[10, 15, 25]}
          fontWeight="extrabold"
          color="#735F32"
        >
          Education
        </Text>
        <Box Box w="40%"></Box>
        <Box Box w="40%"></Box>
      </Flex>
    </Flex>
  );
}
