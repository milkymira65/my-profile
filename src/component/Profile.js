import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex justify="center" w="100vw" mt="3%">
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
        w="80%"
        h={[600, 550, 650]}
        shadow="xl"
        borderRadius="50px"
        direction={["column", "column", "row", "row"]}
        position="absolute"
        top={[
          // {[200, 230, 330, 400, 500, 600, 700, 800]}
          200, 300, 350, 400, 500,
        ]}
        bg="rgba(217, 220, 225, 0.4)"
      >
        <center>
          <Box
            w={[
              // "30%"
              100, 200, 250, 300,
            ]}
            ml="15%"
            mt="30%"
          >
            <Image ml="5%" borderRadius="40px" src="picture/profile.png" />
            <Image m={5} src="picture/ornlogo.png" />
          </Box>
        </center>

        <Box
          justifyContent="center"
          w={[
            // "30%"
            100, 200, 250, 300, 500,
          ]}
          ml="15%"
          mt="10%"
        >
          <Center
            ml="-10%"
            className="profile"
            fontSize={[1, 10, 15, 18, 25]}
            fontWeight="extrabold"
            color="#735F32"
          >
            Software Developer
          </Center>

          <Text
            // isTruncated
            mt="5%"
            className="profile"
            fontSize={["0.5px", "11px", "12px", "15px"]}
          >
            I appreciate how challenging modern computer programming can be and
            I am pleased to be able to provide a number of unique skills to any
            employer. Notwithstanding,I am enthusiastic to take on new and
            challenging tasks;this is the only way to gain further
            knowledge.while my educational experience speaks for itself. I also
            enjoy pursuing the latest topics and obtaining degrees as they
            continue to evolve.Ultimately, I hope to come across a firm which
            allows me to illustrate my talents within an environment that
            promotes teamwork and professional growth.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
