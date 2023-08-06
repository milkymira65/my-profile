// import myImage from "../img/myImage.jpg";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { PayMentCard } from "../child-element/pigture-inedducation";

function Education() {
  return (
    <Flex justify="center" w="100vw" mt="3%">
      <Flex
        w="80%"
        h={[300, 400, 500, 800]}
        shadow="xl"
        borderRadius="50px"
        position="absolute"
        top={[500, 600, 1000, 1200]}
        bg="rgba(217, 220, 225, 0.4)"
      >
        {/* <Center>
          <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={"30px 1fr 20px"}
            gridTemplateColumns={[420, 500, 630, 1035]}
            h={[150, 200, 300, 400, 500]}
            gap="1"
            // color="blackAlpha.700"
            fontWeight="bold"
          >
            <Center
              // ml="-10%"
              className="profile"
              fontSize={[1, 10, 15, 18, 25]}
              fontWeight="extrabold"
              color="#735F32"
            >
              <GridItem
                // pl="2"
                bg="orange.300"
                area={"header"}
                // ml={10}
              >
                Software Developer
              </GridItem>
            </Center>

            <GridItem
              //  ml={5}
              pl="2"
              bg="pink.300"
              area={"nav"}
            ></GridItem>
          </Grid> */}
        {/* </Center> */}

        <PayMentCard />
      </Flex>
    </Flex>
  );
}

export default Education;
