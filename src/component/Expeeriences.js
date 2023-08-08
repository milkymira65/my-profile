//Work Experience

import {
  Image,
  Flex,
  Text,
  Center,
  Box,
  Heading,
  Stack,
  Avatar,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Experience() {
  return (
    <Flex justify="center" w="100vw" mt="3%" h="100vw">
      <Center>
        <Image
          mt={[400, 500, 600, 700, 800]}
          w={[400, 600, 800, 1000, 1150]}
          src="picture/bgExpreiens.png"
          shadow="xl"
          borderRadius="50px"
        />
        <Flex
          w={[700, 800, 1000]}
          h={[200, 300, 400, 500, 1500, 1600]}
          borderRadius="50px"
          position="absolute"
          // top={[3000, 3500, 3800, 4000, 4050, 4500]}

          // bg="rgba(217, 220, 225, 0.4)"
          mt="10%"
        >
          <Center>
            <Box
              maxW={[600, 700, 800, 1000, 1200]}
              h="90%"
              w={"full"}
              borderRadius="2%"
              boxShadow={"2xl"}
              // rounded={"md"}
              p={10}
              mt="-10%"
              overflow={"hidden"}
            >
              <Stack mb="5%">
                <chakra.h3
                  fontSize={30}
                  fontFamily={"Work Sans"}
                  fontWeight={"bold"}
                  color="#735F32"
                  ml="40%"
                  mb={"3%"}
                >
                  <h2 id="Work Experience">Work Experience</h2>
                </chakra.h3>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Backend developer March 2023 - Now ITTHIRIT TECHNOLOGY
                </Heading>
                <Text fontSize={[15, 20]}>
                  5 months of work experience Basic command of English
                  Management database and notification line make documents for
                  customers work according to customer requirements.
                </Text>
              </Stack>
              <Stack mb="5%">
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Personal BusinessJuly 2021- January 2022{" "}
                </Heading>
                <Text fontSize={[15, 20]}>
                  Manage daily operations of the business with 50000bath monthly
                  sales through improved management techniques, attention to
                  detail, inventory control, and developing vendor
                  relationships. Oversee all aspects of business operations
                  including budgeting, cost control, payroll, accounting
                  functions, sales forecasting, and growth objectives. Achieved
                  a 99.3% guest satisfaction store over 1 year based on surveys
                  online. Created coffee and other beverages and bakery food
                  cake products.
                </Text>
              </Stack>
              <Stack mb="5%">
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  March2015 - 2021 other work country
                </Heading>
                <Text fontSize={[15, 20]}>
                  Singer/Model Korea /Malaysia /Singapore Make sales as
                  scheduled.
                </Text>
              </Stack>
              <Stack mb="5%">
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  Salesperson life insurance June2014-March2015
                </Heading>
                <Text fontSize={[15, 20]}>
                  assisted customers in selecting the right insurance by asking
                  an open-ended question to determine each customer's need while
                  explaining life insurance products and suggesting upgrades
                  insurance. Able to generate policy sales of 100,000 baht per
                  month and increase sales every 5% each month. Paired with each
                  other to practice sales skills, persuade customers, Studied
                  life insurance policies, and give suggestions to each other.
                </Text>
              </Stack>
              <Box
                h={"500px"}
                mx={-6}
                mb={6}
                pos={"relative"}
                borderRadius="50px"
              >
                <Image src="picture/working.png" fill alt="Example" />
              </Box>
            </Box>
          </Center>
        </Flex>

        <Flex
          w={[700, 800, 1000]}
          h={[200, 300, 400, 500, 600]}
          borderRadius="50px"
          position="absolute"
          top={[5500, 6000, 6100]}
          // bg="rgba(217, 220, 225, 0.4)"
          mt="-5%"
        >
          <Center>
            <Box
              maxW={[600, 700, 800, 1000, 1200]}
              h="90%"
              w={"full"}
              borderRadius="10%"
              boxShadow={"2xl"}
              // rounded={"md"}
              p={10}
              mt={["-100%", "-20%"]}
              overflow={"hidden"}
              bg="rgba(217, 220, 225, 0.4)"
            >
              <Stack mb="5%">
                <chakra.h3
                  fontSize={30}
                  fontFamily={"Work Sans"}
                  fontWeight={"bold"}
                  color="#735F32"
                  ml="40%"
                  mb={"3%"}
                >
                  Hobbies
                </chakra.h3>
                <Text
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={[10, 15, 20]}
                  fontFamily={"body"}
                >
                  Drawing Designing Read a book listen to music Swimming Go for
                  a walk Find nice Food Gardening, farming Cooking Coding ETC
                </Text>
              </Stack>
              <Stack mb="5%">
                <chakra.h3
                  // py={[5, 10, 20]}
                  fontSize={30}
                  fontFamily={"Work Sans"}
                  fontWeight={"bold"}
                  color="#735F32"
                  ml="40%"
                  mb={"3%"}
                >
                  Contact
                </chakra.h3>

                <Box
                  as="a"
                  href="tawanaornnutcha@gmail.com"
                  fontSize={[15, 20]}
                >
                  {" "}
                  Email : TawanaOrnnutcha@gmail.com{" "}
                </Box>

                <Box fontSize={[15, 20]}>
                  <a href="tel:0826200871">Tel: 0826200871</a>
                </Box>
                {/* </p> */}

                <Box
                  as="a"
                  href="https://github.com/milkymira65"
                  fontSize={[15, 20]}
                >
                  {" "}
                  Git Hub : Milk Ornnutcha{" "}
                </Box>
                <Box
                  as="a"
                  href="https://www.linkedin.com/in/ornnutcha-tawana-292b39251"
                  fontSize={[15, 20]}
                >
                  {" "}
                  Linkedin : ornnutcha-tawana{" "}
                </Box>
                <Box as="a" href="#" fontSize={[15, 20]}>
                  {" "}
                  Address: 40 Moo 5, San Sai Subdistrict, Saraphi District,
                  Chiang Mai Province 50140
                </Box>
              </Stack>
            </Box>
          </Center>
        </Flex>
      </Center>
    </Flex>
  );
}
