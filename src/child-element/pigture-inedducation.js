import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Image,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export function EducationInsite() {
  // const ServerQuickActions = () => {
  return (
    <Box w="100%" h="500px">
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              position="absolute"
              mt="5"
              //   ml="10"
              fontSize="25px"
              color="#735F32"
              rightIcon={<ChevronDownIcon />}
              variant="solid"
              bg="#DBA39A"
              _hover={{ bg: "white", fontSize: "20", color: "#DBA39A" }}
              w="fit-content"
            >
              Education
            </Button>
          </PopoverTrigger>
          <PopoverContent
            // ml={[300, 550, 600]}
            w="1000px"
            _focus={{ boxShadown: "none" }}
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontSize="2xl" w="970px" fontWeight="bold" m="20px">
              Education
            </PopoverHeader>
            <PopoverBody w="1000px">
              <Tabs isLazy colorScheme="green">
                <TabList>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xl"
                    fontWeight="bold"
                    w="80%"
                    color="#735F32"
                  >
                    TechUp BootCamp(Thailand): Aug.2022-Dec 2022 full-Stack
                    Software Developer
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xl"
                    fontWeight="bold"
                    w="80%"
                    color="#735F32"
                  >
                    National Pingtung University of Science and Technology
                    (Taiwan) March2013-July2013 exchange student
                  </Tab>
                  <Tab
                    fontSize="xl"
                    _focus={{ boxShadow: "none" }}
                    fontWeight="bold"
                    w="80%"
                    color="#735F32"
                  >
                    Maejo University(Thailand) Bachelor in Biotechnology
                    June2010- March2014
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {/* You can add your content here. */}
                    <Box>
                      <Box py={4} px={12}>
                        <HStack justifyContent="center">
                          <Image
                            w="400px"
                            h="350px"
                            src="picture/techup.png"
                            alt="techup"
                          ></Image>
                        </HStack>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    {/* You can add your content here. */}
                    <Box>
                      <Box
                      // py={4}
                      //   px={12}
                      >
                        <HStack justifyContent="center">
                          <Image
                            w="700px"
                            h="400px"
                            src="picture/taiwan2.png"
                            alt="tiwan"
                          ></Image>
                        </HStack>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    {/* You can add your content here. */}
                    <Box>
                      <Box
                      //    py={4} px={12}
                      >
                        <HStack justifyContent="center">
                          <Image
                            w="700px"
                            h="400px"
                            src="picture/majeo.png"
                            alt="education"
                          ></Image>
                        </HStack>
                      </Box>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
}
