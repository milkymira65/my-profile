import myImage from "../img/myImage.jpg";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import CaptionCarousel from "../child-element/picter-educaation";
import { Grid, GridItem } from "@chakra-ui/react";

function Education() {
  return (
    <Flex justify="center" w="100vw" mt="3%">
      <Flex
        w="80%"
        h={[600, 550, 650]}
        shadow="xl"
        borderRadius="50px"
        position="absolute"
        top={[1200]}
        bg="rgba(217, 220, 225, 0.4)"
      >
        {/* <Box
          // ml="40%"
          mt="5%"
          className="profile"
          fontSize={[1, 10, 15, 18, 25]}
          fontWeight="extrabold"
          color="#735F32"
        >
          Education
        </Box> */}

        {/* <CaptionCarousel /> */}
        <Center>
          <Grid
            templateAreas={`"header header"
                  "main main"
                  `}
            // gridTemplateRows={"10px 1fr 5px"}
            gridTemplateRows="20px"
            gridTemplateColumns={"50px 1fr"}
            // gridTemplateColumns="20px"
            h="75%"
            // gap="1"
            // ml="30%"
            // color="blackAlpha.700"
            // fontWeight="bold"
          >
            <GridItem
              // pl="2"
              // bg="orange.300"
              area={"header"}
              ml="40%"
              mt="-5%"
              className="profile"
              fontSize={[1, 10, 15, 18, 25]}
              fontWeight="extrabold"
              color="#735F32"
            >
              Education
            </GridItem>

            <GridItem
              // bg="green.300"
              area={"main"}
              h="60%"
            >
              <CaptionCarousel />
            </GridItem>
          </Grid>
        </Center>
      </Flex>
    </Flex>
  );
}

export default Education;
